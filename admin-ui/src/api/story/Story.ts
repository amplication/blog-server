export type Story = {
  content: string;
  createdAt: Date;
  customerName: string | null;
  draft: boolean | null;
  featuredImage: string;
  id: string;
  metaDescription: string | null;
  metaTitle: string | null;
  publishedAt: Date | null;
  slug: string | null;
  tag: string;
  title: string;
  updatedAt: Date;
};
