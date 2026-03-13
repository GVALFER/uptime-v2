-- AlterTable
ALTER TABLE "monitors" ADD COLUMN "synced_at" DATETIME;

-- CreateIndex
CREATE INDEX "monitors_synced_at_idx" ON "monitors"("synced_at");
