export type StoryUpdateInput = {
  content?: string;
  customerName?: string | null;
  draft?: boolean | null;
  featuredImage?: string;
  metaDescription?: string | null;
  metaTitle?: string | null;
  publishedAt?: Date | null;
  slug?: string | null;
  tag?: string;
  title?: string;
};
