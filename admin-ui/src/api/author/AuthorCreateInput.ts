import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  firstName: string;
  lastName?: string | null;
  profileImage?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
  slug?: string | null;
  twitter?: string | null;
};
