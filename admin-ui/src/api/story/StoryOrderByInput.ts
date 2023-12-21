import { SortOrder } from "../../util/SortOrder";

export type StoryOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  draft?: SortOrder;
  featuredImage?: SortOrder;
  id?: SortOrder;
  metaDescription?: SortOrder;
  metaTitle?: SortOrder;
  publishedAt?: SortOrder;
  slug?: SortOrder;
  tag?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
