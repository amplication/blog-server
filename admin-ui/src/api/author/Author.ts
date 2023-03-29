import { Post } from "../post/Post";

export type Author = {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  profileImage: string | null;
  slug: string | null;
  twitter: string | null;
  updatedAt: Date;
};
