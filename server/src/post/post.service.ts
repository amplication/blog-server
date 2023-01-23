import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostServiceBase } from "./base/post.service.base";

@Injectable()
export class PostService extends PostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
