/*
  Warnings:

  - You are about to drop the column `meetingURL` on the `Assignment` table. All the data in the column will be lost.
  - Added the required column `assignmentDescription` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignmentTitle` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentName` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentNusId` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tutorName` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tutorNusId` to the `Assignment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "meetingURL",
ADD COLUMN     "assignmentDescription" TEXT NOT NULL,
ADD COLUMN     "assignmentTitle" TEXT NOT NULL,
ADD COLUMN     "studentName" TEXT NOT NULL,
ADD COLUMN     "studentNusId" TEXT NOT NULL,
ADD COLUMN     "tutorName" TEXT NOT NULL,
ADD COLUMN     "tutorNusId" TEXT NOT NULL;
