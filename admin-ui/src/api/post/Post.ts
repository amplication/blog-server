import { Author } from "../author/Author";
import { Tag } from "../tag/Tag";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  featuredImage: string;
  content: string;
  author?: Author;
  tags?: Array<Tag>;
  metaTitle: string | null;
  metaDescription: string | null;
  slug: string | null;
  draft: boolean | null;
  publishedAt: Date | null;
};
