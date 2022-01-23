import { Author } from "../author/Author";
import { Tag } from "../tag/Tag";

export type Post = {
  author?: Author;
  content: string;
  createdAt: Date;
  featuredImage: string;
  id: string;
  tags?: Array<Tag>;
  title: string;
  updatedAt: Date;
};
