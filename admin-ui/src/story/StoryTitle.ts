import { Story as TStory } from "../api/story/Story";

export const STORY_TITLE_FIELD = "customerName";

export const StoryTitle = (record: TStory): string => {
  return record.customerName?.toString() || String(record.id);
};
