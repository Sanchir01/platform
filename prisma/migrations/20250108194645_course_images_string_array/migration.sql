/*
  Warnings:

  - You are about to drop the column `email` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Course` table. All the data in the column will be lost.
  - The `images` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `description` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Course_email_key";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "email",
DROP COLUMN "password",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
DROP COLUMN "images",
ADD COLUMN     "images" TEXT[];
