import { StoryWhereInput } from "./StoryWhereInput";

export type StoryListRelationFilter = {
  every?: StoryWhereInput;
  some?: StoryWhereInput;
  none?: StoryWhereInput;
};
