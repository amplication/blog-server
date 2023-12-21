export type StoryCreateInput = {
  content: string;
  draft?: boolean | null;
  featuredImage: string;
  metaDescription?: string | null;
  metaTitle?: string | null;
  publishedAt?: Date | null;
  slug?: string | null;
  tag: string;
  title: string;
};
