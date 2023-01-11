import { Injectable } from "@nestjs/common";
import { Prisma, Post } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
import slugify from "slugify";
import { PostServiceBase } from "./base/post.service.base";
import { SLUGGIFY_OPTIONS } from "../constants";

@Injectable()
export class PostService extends PostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async create<T extends Prisma.PostCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagCreateArgs>
  ): Promise<Post> {
    // Set Slug on creation
    args.data.slug = slugify(args.data.title ?? "", SLUGGIFY_OPTIONS);
    // Set Published At if not set
    if (!args.data.publishedAt) {
      args.data.publishedAt = new Date();
    }
    return super.create<T>(args);
  }

  async update<T extends Prisma.PostUpdateArgs>(
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
    return super.update<T>(args);
  }
}
