import { Author } from "../author/Author";
import { Tag } from "../tag/Tag";

export type Post = {
  author?: Author;
  content: string;
  createdAt: Date;
  draft: boolean | null;
  featuredImage: string;
  id: string;
  metaDescription: string | null;
  metaTitle: string | null;
  publishedAt: Date | null;
  slug: string | null;
  tags?: Array<Tag>;
  title: string;
  updatedAt: Date;
};
