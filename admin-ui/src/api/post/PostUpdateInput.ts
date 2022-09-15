import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagUpdateManyWithoutPostsInput } from "./TagUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput;
  content?: string;
  featuredImage?: string;
  metaDescription?: string | null;
  metaTitle?: string | null;
  slug?: string | null;
  tags?: TagUpdateManyWithoutPostsInput;
  title?: string;
};
