import { Author as TAuthor } from "../api/author/Author";

export const AUTHOR_TITLE_FIELD = "firstName";

export const AuthorTitle = (record: TAuthor): string => {
  return record.firstName?.toString() || String(record.id);
};
