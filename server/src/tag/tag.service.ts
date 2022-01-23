import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TagServiceBase } from "./base/tag.service.base";

@Injectable()
export class TagService extends TagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
