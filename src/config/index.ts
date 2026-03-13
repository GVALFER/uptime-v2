export const CONFIG = {
   PORT: Number(process.env.UPTIME_PORT || 3105),
   HOST: process.env.UPTIME_HOST || "0.0.0.0",
   API_KEY: process.env.UPTIME_API_KEY?.trim() || "",
   DATABASE_URL: process.env.UPTIME_DATABASE_URL || "file:./prisma/dev.db",
   CHECK_INTERVAL: "*/15 * * * * *",
   PING_TIMEOUT_MS: 5000,
   CONCURRENT_CHECKS: 20,
   MAX_FAILURES: 3,
   TELEGRAM: {
      BOT_TOKEN: process.env.TELEGRAM_TOKEN || "",
      CHAT_ID: process.env.TELEGRAM_CHAT_ID || "",
      DISABLE_LINK_PREVIEW: true,
   },
} as const;
