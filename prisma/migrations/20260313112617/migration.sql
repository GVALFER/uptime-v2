/*
  Warnings:

  - You are about to drop the column `current_status` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `down_since` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `interval` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `last_attempt` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `last_response` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `last_response_time` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `next_retry` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `notified_at` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `port` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `retry_count` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `synced_at` on the `monitors` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `monitors` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `monitors` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_monitors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "host" TEXT NOT NULL,
    "label" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL DEFAULT 'UNK',
    "consecutive_failures" INTEGER NOT NULL DEFAULT 0,
    "last_response_ms" REAL,
    "last_error" TEXT,
    "last_checked_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_monitors" ("host", "id") SELECT "host", "id" FROM "monitors";
DROP TABLE "monitors";
ALTER TABLE "new_monitors" RENAME TO "monitors";
CREATE UNIQUE INDEX "monitors_host_key" ON "monitors"("host");
CREATE INDEX "monitors_enabled_idx" ON "monitors"("enabled");
CREATE INDEX "monitors_status_idx" ON "monitors"("status");
CREATE INDEX "monitors_last_checked_at_idx" ON "monitors"("last_checked_at");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
