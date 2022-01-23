import { TagWhereInput } from "./TagWhereInput";
import { TagOrderByInput } from "./TagOrderByInput";

export type TagFindManyArgs = {
  where?: TagWhereInput;
  orderBy?: TagOrderByInput;
  skip?: number;
  take?: number;
};
