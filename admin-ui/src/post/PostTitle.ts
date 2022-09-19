import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "metaTitle";

export const PostTitle = (record: TPost): string => {
  return record.title || record.id;
};
