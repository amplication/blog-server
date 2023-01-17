/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `roles` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "slug" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "roles",
ADD COLUMN     "roles" JSONB NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Author_slug_key" ON "Author"("slug");
