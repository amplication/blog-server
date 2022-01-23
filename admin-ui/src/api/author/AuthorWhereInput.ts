import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AuthorWhereInput = {
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profileImage?: StringNullableFilter;
};
