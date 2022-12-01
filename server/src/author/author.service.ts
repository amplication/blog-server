import { Injectable } from "@nestjs/common";
import { Prisma, Author } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
import { AuthorServiceBase } from "./base/author.service.base";

@Injectable()
export class AuthorService extends AuthorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async create<T extends Prisma.AuthorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagCreateArgs>
  ): Promise<Author> {
    return super.create<T>(args);
  }

  async update<T extends Prisma.AuthorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>
  ): Promise<Author> {
    return super.update<T>(args);
  }
}
