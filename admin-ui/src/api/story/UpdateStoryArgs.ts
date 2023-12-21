import { StoryWhereUniqueInput } from "./StoryWhereUniqueInput";
import { StoryUpdateInput } from "./StoryUpdateInput";

export type UpdateStoryArgs = {
  where: StoryWhereUniqueInput;
  data: StoryUpdateInput;
};
