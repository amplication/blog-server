import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  firstName?: string;
  lastName?: string | null;
  profileImage?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
  slug?: string | null;
  twitter?: string | null;
};
