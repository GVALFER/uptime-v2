import * as v from "valibot";
import { Err } from "./errorHandler.js";
import { prisma, type PrismaClient } from "./prisma.js";

type ModelDelegate = {
   findMany: (...args: any[]) => Promise<any[]>;
   count: (...args: any[]) => Promise<number>;
};

type PrismaModelName = {
   [K in keyof PrismaClient]: PrismaClient[K] extends ModelDelegate ? K : never;
}[keyof PrismaClient];

type SortingObject = Record<string, "asc" | "desc" | Record<string, any>>;

export type PaginateQuery = {
   pageIndex?: number | string;
   pageSize?: number | string;
   sorting?: string;
   globalFilter?: string;
} & Record<string, any>;

export type PaginateArgs = {
   table: string | PrismaModelName;
   query?: PaginateQuery;
   allowedSort?: string[];
   sortDefault?: SortingObject[];
   where?: Record<string, any> | ((q: string) => Record<string, any>);
   select?: Record<string, any>;
   include?: Record<string, any>;
} & Record<string, any>;

export type PaginateResult<T = any> = {
   data: T[];
   pagination: {
      pageIndex: number;
      pageSize: number;
      totalPages: number;
      totalItems: number;
   };
};

export type QueryWithFilters = {
   globalFilter?: string;
   [key: string]: any;
};

export type FiltersConfig<T> = {
   AND?: {
      [key: string]: Record<string, any> | (() => Record<string, any> | null) | undefined;
   };
   OR?: {
      search?: Array<Record<string, any>>;
      [key: string]:
         | Record<string, any>
         | Array<Record<string, any>>
         | (() => Record<string, any> | null)
         | undefined;
   };
   search?: Array<Record<string, any>>;
   [key: string]:
      | Record<string, any>
      | Array<Record<string, any>>
      | (() => Record<string, any> | null)
      | { [key: string]: any }
      | undefined;
};

export type WhereClause = {
   AND?: any[];
   OR?: any[];
   [key: string]: any;
};

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);
const toStr = (v: unknown) => (v == null ? "" : String(v));

const buildOrderByObject = (fieldPath: string, direction: "asc" | "desc"): SortingObject =>
   fieldPath
      .split(".")
      .filter(Boolean)
      .reduceRight<SortingObject | "asc" | "desc">(
         (acc, key) => ({ [key]: acc }),
         direction,
      ) as SortingObject;

const parseSorting = (
   sortingStr: unknown,
   allowedSort: string[] = [],
   defaultSort: SortingObject[] = [{ created_at: "desc" }],
): SortingObject[] => {
   const s = toStr(sortingStr).trim();

   if (!s) {
      return defaultSort;
   }

   const parts = s
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => {
         const token = p.replace(":", ".");
         const segments = token
            .split(".")
            .map((segment) => segment.trim())
            .filter(Boolean);
         if (segments.length === 0) return null;

         const lastSegment = segments[segments.length - 1]?.toLowerCase();
         const hasDirection = lastSegment === "asc" || lastSegment === "desc";
         const field = hasDirection ? segments.slice(0, -1).join(".") : segments.join(".");

         if (!field || !allowedSort.includes(field)) return null;

         const dir: "asc" | "desc" = hasDirection && lastSegment === "desc" ? "desc" : "asc";
         return buildOrderByObject(field, dir);
      })
      .filter(Boolean) as SortingObject[];

   return parts.length ? parts : defaultSort;
};

// Pass Prisma types to be accessed via the second argument
export const paginate = async <T = any>(args: PaginateArgs): Promise<PaginateResult<T>> => {
   const {
      table,
      query = {},
      allowedSort = [],
      sortDefault,
      where = {},
      select,
      include,
      ...rest
   } = args;

   if (!prisma) {
      throw Err("Missing 'prisma' parameter", 500);
   }

   if (!table) {
      throw Err("Missing 'table' parameter (ex: 'users')", 500);
   }

   const model = (prisma as any)[table as string] as ModelDelegate | undefined;

   if (!model) {
      throw Err(`Prisma model '${String(table)}' not found`, 500);
   }

   const pageIndex = Math.max(0, parseInt(String(query.pageIndex)) || 0);
   const pageSize = clamp(parseInt(String(query.pageSize)) || 10, 1, 100);

   const skip = pageIndex * pageSize;
   const take = pageSize;

   const orderBy = parseSorting(query.sorting, allowedSort, sortDefault);

   const resolvedWhere =
      typeof where === "function" ? where(toStr(query.globalFilter)) : where || {};

   const totalItems = await model.count({ where: resolvedWhere });
   const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

   const data = (await model.findMany({
      where: resolvedWhere,
      orderBy,
      skip,
      take,
      select,
      include,
      ...rest,
   })) as T[];

   return {
      data,
      pagination: {
         pageIndex,
         pageSize,
         totalPages,
         totalItems,
      },
   };
};

export const paginationSchema = {
   pageIndex: v.fallback(v.pipe(v.unknown(), v.toNumber(), v.integer(), v.minValue(0)), 0),
   pageSize: v.fallback(
      v.pipe(v.unknown(), v.toNumber(), v.integer(), v.minValue(1), v.maxValue(100)),
      10,
   ),
   sorting: v.optional(v.string()),
   globalFilter: v.optional(v.string()),
};

export const resolveFilters = <T extends QueryWithFilters>(
   query: T,
   filtersConfig: FiltersConfig<T>,
): WhereClause => {
   const andConditions: Array<Record<string, any>> = [];
   const orConditions: Array<Record<string, any>> = [];

   // Helper function to check if a query value is valid
   const isValidQueryValue = (value: any): boolean => {
      return value !== undefined && value !== null && value !== "";
   };

   // Helper function to process a single condition
   const processCondition = (
      key: string,
      value: any,
      targetConditions: Array<Record<string, any>>,
      useGlobalFilter = false,
   ) => {
      if (key === "search" && Array.isArray(value) && query.globalFilter) {
         targetConditions.push(...value);
         return;
      }

      const queryValue = useGlobalFilter ? query.globalFilter : query[key];
      if (!isValidQueryValue(queryValue)) {
         return;
      }

      if (typeof value === "function") {
         const result = value();
         if (result && typeof result === "object") {
            if (Array.isArray(result)) {
               targetConditions.push(...result);
            } else {
               targetConditions.push(result);
            }
         }
      } else if (value && typeof value === "object" && !Array.isArray(value)) {
         targetConditions.push(value);
      }
   };

   const processConditions = (
      conditions: Record<string, any>,
      targetConditions: Array<Record<string, any>>,
   ) => {
      Object.entries(conditions).forEach(([key, value]) => {
         processCondition(key, value, targetConditions);
      });
   };

   if (filtersConfig.AND) {
      processConditions(filtersConfig.AND, andConditions);
   }

   if (filtersConfig.OR) {
      processConditions(filtersConfig.OR, orConditions);
   }

   if (filtersConfig.search && Array.isArray(filtersConfig.search) && query.globalFilter) {
      orConditions.push(...filtersConfig.search);
   }

   Object.entries(filtersConfig).forEach(([key, value]) => {
      if (key === "AND" || key === "OR" || key === "search") {
         return;
      }
      processCondition(key, value, andConditions);
   });

   const whereClause: WhereClause = {};

   if (andConditions.length > 0) {
      whereClause.AND = andConditions;
   }

   if (orConditions.length > 0) {
      whereClause.OR = orConditions;
   }

   return whereClause;
};
