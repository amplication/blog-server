import { Injectable } from "@nestjs/common";
import { Prisma, Post } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
import slugify from "slugify";
import { PostServiceBase } from "./base/post.service.base";

@Injectable()
export class PostService extends PostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async create<T extends Prisma.PostCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagCreateArgs>
  ): Promise<Post> {
    args.data.slug = slugify(args.data.title ?? '');
    return super.create<T>(args);
  }

  async update<T extends Prisma.PostUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>
  ): Promise<Post> {
    if (!args.data.slug) {
      delete args.data.slug;
    } else if (args.data.slug) {
      args.data.slug = slugify(args.data.slug);
    }
    return super.update<T>(args);
  }
}
