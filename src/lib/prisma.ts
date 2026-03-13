import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { Prisma, PrismaClient } from "../../prisma/generated/client/index.js";
import { CONFIG } from "../config/index.js";

const adapter = new PrismaBetterSqlite3({
   url: CONFIG.DATABASE_URL,
});

export { Prisma, PrismaClient };
export const prisma = new PrismaClient({ adapter });
