import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TagWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  posts?: PostListRelationFilter;
  slug?: StringNullableFilter;
};
