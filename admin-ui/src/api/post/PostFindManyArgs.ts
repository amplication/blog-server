import { PostWhereInput } from "./PostWhereInput";
import { PostOrderByInput } from "./PostOrderByInput";

export type PostFindManyArgs = {
  where?: PostWhereInput;
  orderBy?: Array<PostOrderByInput>;
  skip?: number;
  take?: number;
};
