import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagCreateNestedManyWithoutPostsInput } from "./TagCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author: AuthorWhereUniqueInput;
  content: string;
  featuredImage: string;
  metaDescription?: string | null;
  metaTitle?: string | null;
  slug?: string | null;
  tags?: TagCreateNestedManyWithoutPostsInput;
  title: string;
};
