import { Injectable } from "@nestjs/common";
import { Prisma, Tag } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import slugify from "slugify";
import { TagServiceBase } from "./base/tag.service.base";
import { SLUGGIFY_OPTIONS } from "../constants";

@Injectable()
export class TagService extends TagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async create<T extends Prisma.TagCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagCreateArgs>
  ): Promise<Tag> {
    // Set Slug on creation
    args.data.slug = slugify(args.data.name ?? "", SLUGGIFY_OPTIONS);
    return super.create(args);
  }

  async update<T extends Prisma.TagUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagUpdateArgs>
  ): Promise<Tag> {
    // Prevent Slugs from being removed
    if (args.data.slug === null) {
      delete args.data.slug;
    }
    return super.update(args);
  }
}
