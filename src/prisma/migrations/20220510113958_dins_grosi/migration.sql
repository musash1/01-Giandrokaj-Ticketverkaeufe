/*
  Warnings:

  - The `kaufdatum` column on the `ticketkauf` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `zahlenBisDatum` column on the `ticketkauf` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ticketkauf" DROP COLUMN "kaufdatum",
ADD COLUMN     "kaufdatum" TIMESTAMP(3),
DROP COLUMN "zahlenBisDatum",
ADD COLUMN     "zahlenBisDatum" TIMESTAMP(3);
