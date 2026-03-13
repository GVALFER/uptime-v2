import ping from "ping";
import { CONFIG } from "../config/index.js";

export const runPing = async (host: string) => {
    try {
        const result = await ping.promise.probe(host, {
            timeout: CONFIG.PING_TIMEOUT_MS / 1000,
            extra: ["-c", "1"],
        });

        if (!result.alive) {
            return {
                success: false,
                responseTimeMs: null,
                error: "Host unreachable",
            };
        }

        const responseTime =
            typeof result.time === "number" ? result.time : parseFloat(result.time as string);

        return {
            success: true,
            responseTimeMs: Number.isFinite(responseTime)
                ? Math.round(responseTime * 100) / 100
                : null,
            error: null,
        };
    } catch (error: any) {
        return {
            success: false,
            responseTimeMs: null,
            error: error.message || "Ping check failed",
        };
    }
};
