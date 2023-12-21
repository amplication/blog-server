import { Story as TStory } from "../api/story/Story";

export const STORY_TITLE_FIELD = "metaTitle";

export const StoryTitle = (record: TStory): string => {
  return record.metaTitle?.toString() || String(record.id);
};
