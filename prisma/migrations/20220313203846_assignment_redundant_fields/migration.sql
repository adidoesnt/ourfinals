/*
  Warnings:

  - You are about to drop the column `studentName` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `studentNusId` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `tutorName` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `tutorNusId` on the `Assignment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "studentName",
DROP COLUMN "studentNusId",
DROP COLUMN "tutorName",
DROP COLUMN "tutorNusId";
