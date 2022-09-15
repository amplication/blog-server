import { Post } from "../post/Post";

export type Tag = {
  createdAt: Date;
  id: string;
  name: string;
  posts?: Array<Post>;
  slug: string | null;
  updatedAt: Date;
};
