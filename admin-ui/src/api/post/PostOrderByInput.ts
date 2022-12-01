import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  authorId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  draft?: SortOrder;
  featuredImage?: SortOrder;
  id?: SortOrder;
  metaDescription?: SortOrder;
  metaTitle?: SortOrder;
  publishedAt?: SortOrder;
  slug?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
