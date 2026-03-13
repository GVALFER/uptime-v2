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

app.put("/", schema, async (c) => {
   const body = c.req.valid("json");
   const host = body.host.trim().toLowerCase();

   if (isIP(host) === 0) {
      throw Err("Host must be a valid IPv4 or IPv6 address", 400);
   }

   const monitor = await prisma.monitor.findUnique({
      where: {
         host,
      },
   });

   if (!monitor) {
      throw Err("Monitor not found", 404);
   }

   const data: {
      label?: string | null;
      enabled?: boolean;
   } = {};

   if (body.label !== undefined) {
      data.label = body.label?.trim() || null;
   }

   if (body.enabled !== undefined) {
      data.enabled = body.enabled;
   }

   if (Object.keys(data).length === 0) {
      return c.json({ data: monitor }, 200);
   }

   const updatedMonitor = await prisma.monitor.update({
      where: {
         id: monitor.id,
      },
      data,
   });

   return c.json({ data: updatedMonitor }, 200);
});

export default app;
