-- CreateTable
CREATE TABLE "Story" (
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "draft" BOOLEAN,
    "featuredImage" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "metaDescription" TEXT,
    "metaTitle" TEXT,
    "publishedAt" TIMESTAMP(3),
    "slug" TEXT,
    "tag" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Story_slug_key" ON "Story"("slug");
