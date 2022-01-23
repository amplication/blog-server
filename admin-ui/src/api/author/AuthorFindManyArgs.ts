import { AuthorWhereInput } from "./AuthorWhereInput";
import { AuthorOrderByInput } from "./AuthorOrderByInput";

export type AuthorFindManyArgs = {
  where?: AuthorWhereInput;
  orderBy?: AuthorOrderByInput;
  skip?: number;
  take?: number;
};
