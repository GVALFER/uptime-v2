import { Cron } from "croner";
import type { Monitor } from "../../prisma/generated/client/index.js";
import { CONFIG } from "../config/index.js";
import { sendTelegram } from "../lib/notification/sendTelegram.js";
import { prisma } from "../lib/prisma.js";
import { runPing } from "../lib/ping.js";

let job: Cron | null = null;

const escapeHtml = (value: string) =>
   value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const sendStatusNotification = async (monitor: Monitor, nextStatus: string) => {
   const label = escapeHtml(monitor.label || monitor.host);
   const host = escapeHtml(monitor.host);
   const message =
      nextStatus === "DOWN" ? `🔴 ${label} { ${host} } is DOWN!` : `🟢 ${label} { ${host} } is UP!`;

   await sendTelegram({ message });
};

const processMonitor = async (monitor: Monitor) => {
   const result = await runPing(monitor.host);
   const consecutiveFailures = result.success ? 0 : monitor.consecutive_failures + 1;

   const status = result.success
      ? "UP"
      : consecutiveFailures >= CONFIG.MAX_FAILURES || monitor.status === "DOWN"
        ? "DOWN"
        : monitor.status;

   const updatedMonitor = await prisma.monitor.update({
      where: {
         id: monitor.id,
      },
      data: {
         status,
         consecutive_failures: consecutiveFailures,
         last_response_ms: result.success ? result.responseTimeMs : null,
         last_error: result.success ? null : result.error,
         last_checked_at: new Date(),
      },
   });

   if (monitor.status !== "DOWN" && updatedMonitor.status === "DOWN") {
      await sendStatusNotification(updatedMonitor, "DOWN");
   }

   if (monitor.status === "DOWN" && updatedMonitor.status === "UP") {
      await sendStatusNotification(updatedMonitor, "UP");
   }
};

export const processMonitors = async () => {
   const monitors = await prisma.monitor.findMany({
      where: {
         enabled: true,
      },
      orderBy: {
         host: "asc",
      },
   });

   for (let index = 0; index < monitors.length; index += CONFIG.CONCURRENT_CHECKS) {
      const batch = monitors.slice(index, index + CONFIG.CONCURRENT_CHECKS);
      await Promise.allSettled(batch.map((monitor) => processMonitor(monitor)));
   }
};

export const initCronJobs = () => {
   if (job) {
      return job;
   }

   job = new Cron(CONFIG.CHECK_INTERVAL, { protect: true }, async () => {
      await processMonitors();
   });

   void job.trigger();

   return job;
};

export const stopCronJobs = () => {
   if (!job) return;

   job.stop();
   job = null;
};
