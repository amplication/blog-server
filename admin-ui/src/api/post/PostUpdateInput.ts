import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput;
  content?: string;
  featuredImage?: string;
  title?: string;
};
