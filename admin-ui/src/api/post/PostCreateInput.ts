import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagCreateNestedManyWithoutPostsInput } from "./TagCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author: AuthorWhereUniqueInput;
  content: string;
  featuredImage: string;
  tags?: TagCreateNestedManyWithoutPostsInput;
  title: string;
};
