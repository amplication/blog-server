import { StoryWhereInput } from "./StoryWhereInput";
import { StoryOrderByInput } from "./StoryOrderByInput";

export type StoryFindManyArgs = {
  where?: StoryWhereInput;
  orderBy?: Array<StoryOrderByInput>;
  skip?: number;
  take?: number;
};
