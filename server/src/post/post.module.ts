import { Module } from "@nestjs/common";
import { PostModuleBase } from "./base/post.module.base";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { PostResolver } from "./post.resolver";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PostModuleBase, PrismaModule],
  controllers: [PostController],
  providers: [PostService, PostResolver],
  exports: [PostService],
})
export class PostModule {}
