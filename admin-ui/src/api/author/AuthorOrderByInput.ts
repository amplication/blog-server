import { SortOrder } from "../../util/SortOrder";

export type AuthorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  profileImage?: SortOrder;
  slug?: SortOrder;
  twitter?: SortOrder;
};
