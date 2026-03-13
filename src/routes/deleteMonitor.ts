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
   }),
);

app.delete("/", schema, async (c) => {
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

   await prisma.monitor.delete({
      where: {
         id: monitor.id,
      },
   });

   return c.json({ message: `Monitor ${monitor.host} deleted` }, 200);
});

export default app;
