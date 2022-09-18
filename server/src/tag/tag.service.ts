import { Injectable } from "@nestjs/common";
import { Prisma, Tag } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
import slugify from "slugify";
import { TagServiceBase } from "./base/tag.service.base";

@Injectable()
export class TagService extends TagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async create<T extends Prisma.TagCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagCreateArgs>
  ): Promise<Tag> {
    args.data.slug = slugify(args.data.name ?? '');
    return super.create(args);
  }

  async update<T extends Prisma.TagUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagUpdateArgs>
  ): Promise<Tag> {
    if (!args.data.slug) {
      delete args.data.slug;
    }
    return super.update(args);
  }
}
