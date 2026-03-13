import { Hono } from "hono";
import * as v from "valibot";
import { paginate, paginationSchema, resolveFilters } from "../lib/paginate.js";
import { validator } from "../lib/validator.js";

const app = new Hono();

const schema = validator(
   "query",
   v.strictObject({
      host: v.optional(v.pipe(v.string(), v.trim(), v.minLength(1, "Host is required"))),
      enabled: v.optional(v.picklist(["true", "false"])),
      status: v.optional(v.picklist(["UNK", "UP", "DOWN"])),
      ...paginationSchema,
   }),
);

app.get("/", schema, async (c) => {
   const query = c.req.valid("query");
   const host = query.host?.trim().toLowerCase();

   const filters = resolveFilters(query, {
      host: host ? { host } : undefined,
      enabled: query.enabled !== undefined ? { enabled: query.enabled === "true" } : undefined,
      status: query.status ? { status: query.status } : undefined,
      search: [
         { host: { contains: query.globalFilter } },
         { label: { contains: query.globalFilter } },
      ],
   });

   const monitors = await paginate({
      table: "monitor",
      query,
      where: filters,
      allowedSort: [
         "host",
         "label",
         "enabled",
         "status",
         "consecutive_failures",
         "last_response_ms",
         "last_checked_at",
         "created_at",
         "updated_at",
      ],
      sortDefault: [{ host: "asc" }],
      select: {
         id: true,
         host: true,
         label: true,
         enabled: true,
         status: true,
         consecutive_failures: true,
         last_response_ms: true,
         last_error: true,
         last_checked_at: true,
         created_at: true,
         updated_at: true,
      },
   });

   return c.json(monitors, 200);
});

export default app;
