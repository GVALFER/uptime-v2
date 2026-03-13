import { Hono } from "hono";
import { isIP } from "node:net";
import * as v from "valibot";
import { Err } from "../lib/errorHandler.js";
import { prisma } from "../lib/prisma.js";
import { validator } from "../lib/validator.js";

const app = new Hono();

const schema = validator(
   "json",
   v.strictObject({
      host: v.pipe(v.string(), v.trim(), v.minLength(1, "Host is required")),
      label: v.optional(v.nullable(v.string())),
      enabled: v.optional(v.boolean()),
   }),
);

app.post("/", schema, async (c) => {
   const body = c.req.valid("json");
   const host = body.host.trim().toLowerCase();

   if (isIP(host) === 0) {
      throw Err("Host must be a valid IPv4 or IPv6 address", 400);
   }

   const checkHost = await prisma.monitor.findUnique({
      where: {
         host,
      },
   });

   if (checkHost) {
      throw Err("Host already exists", 409);
   }

   const monitor = await prisma.monitor.create({
      data: {
         host,
         label: body.label?.trim() || null,
         enabled: body.enabled ?? true,
      },
   });

   return c.json({ data: monitor }, 201);
});

export default app;
