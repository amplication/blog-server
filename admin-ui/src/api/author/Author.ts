import { Post } from "../post/Post";

export type Author = {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string | null;
  phone: string | null;
  posts?: Array<Post>;
  profileImage: string | null;
  updatedAt: Date;
};
