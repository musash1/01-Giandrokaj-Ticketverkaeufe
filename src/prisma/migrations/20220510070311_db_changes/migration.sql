/*
  Warnings:

  - Added the required column `artist` to the `konzert` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "konzert" ADD COLUMN     "artist" TEXT NOT NULL;
