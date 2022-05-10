/*
  Warnings:

  - You are about to drop the column `konzertName` on the `konzert` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "konzert" DROP COLUMN "konzertName";

-- AlterTable
ALTER TABLE "ticketkauf" ALTER COLUMN "treuebonus" DROP NOT NULL;
