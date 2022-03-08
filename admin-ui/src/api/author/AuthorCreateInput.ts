import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  firstName: string;
  lastName?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
  profileImage?: string | null;
};
