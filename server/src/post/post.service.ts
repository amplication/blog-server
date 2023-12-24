import { Injectable } from "@nestjs/common";
import { Prisma, Post } from "@prisma/client";
import slugify from "slugify";

import { PrismaService } from "../prisma/prisma.service";
import { PostServiceBase } from "./base/post.service.base";
import { SLUGGIFY_OPTIONS } from "../constants";

@Injectable()
export class PostService extends PostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async createPost<T extends Prisma.PostCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagCreateArgs>
  ): Promise<Post> {
    // Set Slug on creation
    args.data.slug = slugify(args.data.title ?? "", SLUGGIFY_OPTIONS);
    // Set Published At if not set
    if (args.data.publishedAt === null || args.data.publishedAt === undefined) {
      args.data.publishedAt = new Date();
    }
    // Set Draft to `false` if not set
    if (args.data.draft === null || args.data.draft === undefined) {
      args.data.draft = false;
    }
    return super.createPost<T>(args);
  }

  async updatePost<T extends Prisma.PostUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>
  ): Promise<Post> {
    // Prevent Slugs from being removed
    if (args.data.slug === null) {
      delete args.data.slug;
    }
    // Prevent Published At from being removed
    if (args.data.publishedAt === null) {
      delete args.data.publishedAt;
    }
    // Set Draft from being removed
    if (args.data.draft === null) {
      delete args.data.draft;
    }
    return super.updatePost<T>(args);
  }
}
