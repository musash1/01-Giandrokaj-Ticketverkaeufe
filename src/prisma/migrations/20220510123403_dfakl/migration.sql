/*
  Warnings:

  - You are about to alter the column `treuebonus` on the `ticketkauf` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "ticketkauf" ALTER COLUMN "treuebonus" SET DATA TYPE INTEGER;
