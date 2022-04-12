import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  firstName: string;
  lastName?: string | null;
  phone?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
  profileImage?: string | null;
};
