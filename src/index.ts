import { serve } from "@hono/node-server";
import "dotenv/config";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { initCronJobs, stopCronJobs } from "./cron/index.js";
import { CONFIG } from "./config/index.js";
import routes from "./routes/index.js";
import { errorHandler, keyGuard, prisma } from "./lib/index.js";
import { rateLimiter } from "hono-rate-limiter";

if (!CONFIG.API_KEY) {
   throw new Error("UPTIME_API_KEY is required");
}

const app = new Hono();

// Logger Middleware
app.use("*", logger());

// Host Guard Middleware
app.use("*", keyGuard);

// Rate Limiter Middleware
app.use(
   rateLimiter({
      windowMs: 5 * 60 * 1000,
      limit: 100,
      keyGenerator: (c) => c.req.header("x-forwarded-for") ?? "",
   }),
);

app.onError((err, c) => {
   const { status, body } = errorHandler(err);

   if (status >= 500) {
      console.error(err);
   }
   return c.json(body, status);
});

// 404 Not Found Middleware
app.notFound((c) => c.json({ code: "NOT_FOUND", error: "Route not found" }, 404));

// Register routes
app.route("/", routes);

initCronJobs();

const server = serve({ fetch: app.fetch, port: CONFIG.PORT, hostname: CONFIG.HOST }, (info) => {
   console.log(`➜ API running at http://${info.address}:${info.port}`);
});

const shutdown = async (signal: string) => {
   console.log(`\n➜ ${signal} received, shutting down...`);
   stopCronJobs();
   server.close();
   await prisma.$disconnect();
   process.exit(0);
};

process.on("SIGTERM", () => void shutdown("SIGTERM"));
process.on("SIGINT", () => void shutdown("SIGINT"));
