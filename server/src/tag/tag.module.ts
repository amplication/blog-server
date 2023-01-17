import { Module } from "@nestjs/common";
import { TagModuleBase } from "./base/tag.module.base";
import { TagService } from "./tag.service";
import { TagController } from "./tag.controller";
import { TagResolver } from "./tag.resolver";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [TagModuleBase, PrismaModule],
  controllers: [TagController],
  providers: [TagService, TagResolver],
  exports: [TagService],
})
export class TagModule {}
