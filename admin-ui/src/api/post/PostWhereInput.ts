import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type PostWhereInput = {
  author?: AuthorWhereUniqueInput;
  content?: StringFilter;
  featuredImage?: StringFilter;
  id?: StringFilter;
  tags?: TagListRelationFilter;
  title?: StringFilter;
};
