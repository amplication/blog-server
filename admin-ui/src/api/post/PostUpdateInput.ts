import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagUpdateManyWithoutPostsInput } from "./TagUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  title?: string;
  featuredImage?: string;
  content?: string;
  author?: AuthorWhereUniqueInput;
  tags?: TagUpdateManyWithoutPostsInput;
  metaTitle?: string | null;
  metaDescription?: string | null;
  slug?: string | null;
  draft?: boolean | null;
  publishedAt?: Date | null;
};
