import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type StoryWhereInput = {
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  customerName?: StringNullableFilter;
  draft?: BooleanNullableFilter;
  featuredImage?: StringFilter;
  id?: StringFilter;
  metaDescription?: StringNullableFilter;
  metaTitle?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  slug?: StringNullableFilter;
  tag?: StringFilter;
  title?: StringFilter;
  updatedAt?: DateTimeFilter;
};
