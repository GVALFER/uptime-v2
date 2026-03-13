import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "./schema.prisma",
    datasource: {
        url: process.env.UPTIME_DATABASE_URL || "file:./dev.db",
    },
});
