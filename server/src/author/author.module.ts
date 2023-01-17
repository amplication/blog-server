import { Module } from "@nestjs/common";
import { AuthorModuleBase } from "./base/author.module.base";
import { AuthorService } from "./author.service";
import { AuthorController } from "./author.controller";
import { AuthorResolver } from "./author.resolver";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [AuthorModuleBase, PrismaModule],
  controllers: [AuthorController],
  providers: [AuthorService, AuthorResolver],
  exports: [AuthorService],
})
export class AuthorModule {}
