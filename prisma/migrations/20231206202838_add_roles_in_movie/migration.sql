/*
  Warnings:

  - Added the required column `duration` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_date` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "release_date" TIMESTAMP(3) NOT NULL;
