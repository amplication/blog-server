import { PostWhereUniqueInput } from "./PostWhereUniqueInput";
import { PostUpdateInput } from "./PostUpdateInput";

export type UpdatePostArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};
