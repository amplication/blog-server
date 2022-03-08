import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagUpdateManyWithoutPostsInput } from "./TagUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput;
  content?: string;
  featuredImage?: string;
  tags?: TagUpdateManyWithoutPostsInput;
  title?: string;
};
