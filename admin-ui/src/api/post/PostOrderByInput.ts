import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  featuredImage?: SortOrder;
  content?: SortOrder;
  authorId?: SortOrder;
  metaTitle?: SortOrder;
  metaDescription?: SortOrder;
  slug?: SortOrder;
  draft?: SortOrder;
  publishedAt?: SortOrder;
};
