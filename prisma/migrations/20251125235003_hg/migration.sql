-- AlterTable
ALTER TABLE "monitors" ADD COLUMN "source" TEXT;

-- CreateIndex
CREATE INDEX "monitors_source_idx" ON "monitors"("source");

-- CreateIndex
CREATE INDEX "monitors_source_host_port_type_idx" ON "monitors"("source", "host", "port", "type");
