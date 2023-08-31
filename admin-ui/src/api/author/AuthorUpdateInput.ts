import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  firstName?: string;
  lastName?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
  profileImage?: string | null;
  slug?: string | null;
  twitter?: string | null;
};
