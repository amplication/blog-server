import { Tag as TTag } from "../api/tag/Tag";

export const TAG_TITLE_FIELD = "name";

export const TagTitle = (record: TTag): string => {
  return record.name || record.id;
};
