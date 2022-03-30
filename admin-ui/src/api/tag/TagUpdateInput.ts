import { PostUpdateManyWithoutTagsInput } from "./PostUpdateManyWithoutTagsInput";

export type TagUpdateInput = {
  name?: string;
  posts?: PostUpdateManyWithoutTagsInput;
};
