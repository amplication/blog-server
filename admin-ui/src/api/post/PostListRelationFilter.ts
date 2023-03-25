import { PostWhereInput } from "./PostWhereInput";

export type PostListRelationFilter = {
  every?: PostWhereInput;
  some?: PostWhereInput;
  none?: PostWhereInput;
};
