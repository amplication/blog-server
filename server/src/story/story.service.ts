import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoryServiceBase } from "./base/story.service.base";

@Injectable()
export class StoryService extends StoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
