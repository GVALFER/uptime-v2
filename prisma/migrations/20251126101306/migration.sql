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
    "interval" INTEGER NOT NULL,
    "synced_at" DATETIME,
    "current_status" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "retry_count" INTEGER NOT NULL DEFAULT 0,
    "last_attempt" DATETIME,
    "next_retry" DATETIME,
    "last_response" TEXT,
    "last_response_time" REAL,
    "notified_at" DATETIME,
    "notification_sent" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_monitors" ("host", "id", "interval", "port", "retries", "source", "synced_at", "type") SELECT "host", "id", "interval", "port", "retries", "source", "synced_at", "type" FROM "monitors";
DROP TABLE "monitors";
ALTER TABLE "new_monitors" RENAME TO "monitors";
CREATE INDEX "monitors_source_idx" ON "monitors"("source");
CREATE INDEX "monitors_type_idx" ON "monitors"("type");
CREATE INDEX "monitors_host_idx" ON "monitors"("host");
CREATE INDEX "monitors_interval_idx" ON "monitors"("interval");
CREATE INDEX "monitors_synced_at_idx" ON "monitors"("synced_at");
CREATE INDEX "monitors_next_retry_idx" ON "monitors"("next_retry");
CREATE INDEX "monitors_current_status_idx" ON "monitors"("current_status");
CREATE INDEX "monitors_notification_sent_current_status_idx" ON "monitors"("notification_sent", "current_status");
CREATE INDEX "monitors_source_host_port_type_idx" ON "monitors"("source", "host", "port", "type");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
