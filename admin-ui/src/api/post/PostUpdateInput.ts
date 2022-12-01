import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagUpdateManyWithoutPostsInput } from "./TagUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput;
  content?: string;
  draft?: boolean | null;
  featuredImage?: string;
  metaDescription?: string | null;
  metaTitle?: string | null;
  publishedAt?: Date | null;
  slug?: string | null;
  tags?: TagUpdateManyWithoutPostsInput;
  title?: string;
};
