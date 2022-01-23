import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  author?: AuthorWhereUniqueInput;
  content?: StringFilter;
  featuredImage?: StringFilter;
  id?: StringFilter;
  title?: StringFilter;
};
