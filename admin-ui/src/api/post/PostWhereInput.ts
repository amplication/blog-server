import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type PostWhereInput = {
  author?: AuthorWhereUniqueInput;
  content?: StringFilter;
  draft?: BooleanNullableFilter;
  featuredImage?: StringFilter;
  id?: StringFilter;
  metaDescription?: StringNullableFilter;
  metaTitle?: StringNullableFilter;
  slug?: StringNullableFilter;
  tags?: TagListRelationFilter;
  title?: StringFilter;
};
