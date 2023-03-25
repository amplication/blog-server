import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "metaTitle";

export const PostTitle = (record: TPost): string => {
  return record.metaTitle || String(record.id);
};
