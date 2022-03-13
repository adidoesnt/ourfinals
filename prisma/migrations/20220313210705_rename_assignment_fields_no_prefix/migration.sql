/*
  Warnings:

  - You are about to drop the column `assignmentDescription` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `assignmentTitle` on the `Assignment` table. All the data in the column will be lost.
  - Added the required column `description` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Assignment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Assignment" RENAME COLUMN "assignmentDescription" TO "description";
ALTER TABLE "Assignment" RENAME COLUMN "assignmentTitle" TO "title";
