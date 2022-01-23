import { SortOrder } from "../../util/SortOrder";

export type AuthorOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  profileImage?: SortOrder;
  updatedAt?: SortOrder;
};
