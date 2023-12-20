/*
  Warnings:

  - Changed the type of `roles` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "publishedAt" TIMESTAMP(3);

-- AlterTable

ALTER TABLE "User" DROP COLUMN "roles",
ADD COLUMN     "roles" JSONB NOT NULL;
