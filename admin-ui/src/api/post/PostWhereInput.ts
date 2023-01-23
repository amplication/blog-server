import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";

export type PostWhereInput = {
  author?: AuthorWhereUniqueInput;
  content?: StringFilter;
  draft?: BooleanNullableFilter;
  featuredImage?: StringFilter;
  id?: StringFilter;
  metaDescription?: StringNullableFilter;
  metaTitle?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  slug?: StringNullableFilter;
  tags?: TagListRelationFilter;
  title?: StringFilter;
};
