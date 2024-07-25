import { StringFilter } from "../../util/StringFilter";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PostWhereInput = {
  id?: StringFilter;
  title?: StringFilter;
  featuredImage?: StringFilter;
  content?: StringFilter;
  author?: AuthorWhereUniqueInput;
  tags?: TagListRelationFilter;
  metaTitle?: StringNullableFilter;
  metaDescription?: StringNullableFilter;
  slug?: StringNullableFilter;
  draft?: BooleanNullableFilter;
  publishedAt?: DateTimeNullableFilter;
};
