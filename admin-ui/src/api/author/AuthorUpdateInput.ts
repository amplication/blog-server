import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  firstName?: string;
  lastName?: string | null;
  phone?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
  profileImage?: string | null;
};
