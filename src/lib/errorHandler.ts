import { HTTPException } from "hono/http-exception";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import { Prisma } from "./prisma.js";

export type ErrorPayload = {
   code: string;
   error: string | string[];
};

export const errorHandler = (
   err: unknown,
): { status: ContentfulStatusCode; body: ErrorPayload; stack?: string } => {
   const http = err instanceof HTTPException ? err : undefined;
   const baseStatus = http?.status ?? 500;
   const cause = (http?.cause ?? err) as unknown;

   if (cause instanceof SyntaxError) {
      return {
         status: 400,
         body: { code: "BAD_REQUEST", error: "Invalid JSON body" },
         stack: cause.stack,
      };
   }

   if (cause instanceof Prisma.PrismaClientKnownRequestError) {
      switch (cause.code) {
         case "P2002":
            return {
               status: 409,
               body: { code: "UNIQUE_CONSTRAINT", error: "Record already exists." },
               stack: cause.stack,
            };
         case "P2025":
         case "P2001":
            return {
               status: 404,
               body: { code: "NOT_FOUND", error: "Record not found." },
               stack: cause.stack,
            };
         default:
            return {
               status: 400,
               body: { code: cause.code, error: "Invalid request." },
               stack: cause.stack,
            };
      }
   }

   const status = (
      baseStatus >= 400 && baseStatus <= 599 ? baseStatus : 500
   ) as ContentfulStatusCode;
   const isServerError = status >= 500;

   return {
      status,
      body: {
         code: isServerError ? "INTERNAL_ERROR" : "BAD_REQUEST",
         error: isServerError
            ? "Internal server error."
            : (err as Error)?.message || "Bad request.",
      },
      stack: (err as Error)?.stack || String(err),
   };
};

export const Err = (message: string, status: ContentfulStatusCode = 500) =>
   new HTTPException(status, { message });
