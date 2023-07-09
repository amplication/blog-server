import { Injectable } from "@nestjs/common";
import { Prisma, Author } from "@prisma/client";
import slugify from "slugify";

import { PrismaService } from "../prisma/prisma.service";
import { AuthorServiceBase } from "./base/author.service.base";
import { SLUGGIFY_OPTIONS } from "../constants";

@Injectable()
export class AuthorService extends AuthorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  //commit on line 15 wit not reason

  async create<T extends Prisma.AuthorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagCreateArgs>
  ): Promise<Author> {
    // Set Slug on creation
    const name = [args.data.firstName, args.data.lastName].join(" ");
    args.data.slug = slugify(name, SLUGGIFY_OPTIONS);
    return super.create<T>(args);
  }

  async update<T extends Prisma.AuthorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>
  ): Promise<Author> {
    // Prevent Slugs from being removed
    if (args.data.slug === null) {
      delete args.data.slug;
    }
    return super.update<T>(args);
  }
}
