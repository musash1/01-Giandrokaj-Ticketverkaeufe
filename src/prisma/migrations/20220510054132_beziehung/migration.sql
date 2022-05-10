/*
  Warnings:

  - You are about to drop the column `konzert` on the `ticketkauf` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ticketkauf" DROP COLUMN "konzert",
ADD COLUMN     "konzertId" INTEGER;

-- CreateTable
CREATE TABLE "konzert" (
    "id" SERIAL NOT NULL,
    "konzertName" TEXT NOT NULL,

    CONSTRAINT "konzert_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ticketkauf" ADD CONSTRAINT "ticketkauf_konzertId_fkey" FOREIGN KEY ("konzertId") REFERENCES "konzert"("id") ON DELETE SET NULL ON UPDATE CASCADE;
