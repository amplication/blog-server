import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagCreateNestedManyWithoutPostsInput } from "./TagCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author: AuthorWhereUniqueInput;
  content: string;
  draft?: boolean | null;
  featuredImage: string;
  metaDescription?: string | null;
  metaTitle?: string | null;
  publishedAt?: Date | null;
  slug?: string | null;
  tags?: TagCreateNestedManyWithoutPostsInput;
  title: string;
};
