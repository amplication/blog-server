import { AuthorWhereInput } from "./AuthorWhereInput";
import { AuthorOrderByInput } from "./AuthorOrderByInput";

export type AuthorFindManyArgs = {
  where?: AuthorWhereInput;
  orderBy?: Array<AuthorOrderByInput>;
  skip?: number;
  take?: number;
};
