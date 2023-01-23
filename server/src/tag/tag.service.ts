import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagServiceBase } from "./base/tag.service.base";

@Injectable()
export class TagService extends TagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
