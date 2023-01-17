import { Module } from "@nestjs/common";
import { UserModuleBase } from "./base/user.module.base";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserResolver } from "./user.resolver";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [UserModuleBase, PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
