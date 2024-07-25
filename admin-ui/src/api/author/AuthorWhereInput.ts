import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type AuthorWhereInput = {
  id?: StringFilter;
  firstName?: StringFilter;
  lastName?: StringNullableFilter;
  profileImage?: StringNullableFilter;
  posts?: PostListRelationFilter;
  slug?: StringNullableFilter;
  twitter?: StringNullableFilter;
};
