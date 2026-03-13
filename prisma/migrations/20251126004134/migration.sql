/*
  Warnings:

  - You are about to drop the column `status` on the `monitors` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_monitors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "source" TEXT,
    "type" TEXT NOT NULL DEFAULT 'PING',
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "retries" INTEGER NOT NULL,
    "interval" INTEGER NOT NULL
);
INSERT INTO "new_monitors" ("host", "id", "interval", "port", "retries", "source", "type") SELECT "host", "id", "interval", "port", "retries", "source", "type" FROM "monitors";
DROP TABLE "monitors";
ALTER TABLE "new_monitors" RENAME TO "monitors";
CREATE INDEX "monitors_source_idx" ON "monitors"("source");
CREATE INDEX "monitors_type_idx" ON "monitors"("type");
CREATE INDEX "monitors_host_idx" ON "monitors"("host");
CREATE INDEX "monitors_interval_idx" ON "monitors"("interval");
CREATE INDEX "monitors_source_host_port_type_idx" ON "monitors"("source", "host", "port", "type");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
