import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type AuthorWhereInput = {
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  posts?: PostListRelationFilter;
  profileImage?: StringNullableFilter;
};
