import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "title";

export const PostTitle = (record: TPost): string => {
  return record.title?.toString() || String(record.id);
};
