import { AuthorWhereUniqueInput } from "./AuthorWhereUniqueInput";
import { AuthorUpdateInput } from "./AuthorUpdateInput";

export type UpdateAuthorArgs = {
  where: AuthorWhereUniqueInput;
  data: AuthorUpdateInput;
};
