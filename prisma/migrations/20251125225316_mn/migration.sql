-- CreateTable
CREATE TABLE "monitors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "type" TEXT NOT NULL DEFAULT 'PING',
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "retries" INTEGER NOT NULL,
    "interval" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "monitors_status_idx" ON "monitors"("status");

-- CreateIndex
CREATE INDEX "monitors_type_idx" ON "monitors"("type");

-- CreateIndex
CREATE INDEX "monitors_host_idx" ON "monitors"("host");

-- CreateIndex
CREATE INDEX "monitors_status_type_idx" ON "monitors"("status", "type");

-- CreateIndex
CREATE INDEX "monitors_interval_idx" ON "monitors"("interval");
