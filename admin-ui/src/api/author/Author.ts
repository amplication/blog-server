import { Post } from "../post/Post";

export type Author = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string | null;
  profileImage: string | null;
  posts?: Array<Post>;
  slug: string | null;
  twitter: string | null;
};
