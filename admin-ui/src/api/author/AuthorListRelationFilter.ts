import { AuthorWhereInput } from "./AuthorWhereInput";

export type AuthorListRelationFilter = {
  every?: AuthorWhereInput;
  some?: AuthorWhereInput;
  none?: AuthorWhereInput;
};
