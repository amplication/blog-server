import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagCreateNestedManyWithoutPostsInput } from "./TagCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  title: string;
  featuredImage: string;
  content: string;
  author: AuthorWhereUniqueInput;
  tags?: TagCreateNestedManyWithoutPostsInput;
  metaTitle?: string | null;
  metaDescription?: string | null;
  slug?: string | null;
  draft?: boolean | null;
  publishedAt?: Date | null;
};
