import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuthorModuleBase } from "./base/author.module.base";
import { AuthorService } from "./author.service";
import { AuthorController } from "./author.controller";
import { AuthorResolver } from "./author.resolver";

@Module({
  imports: [AuthorModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuthorController],
  providers: [AuthorService, AuthorResolver],
  exports: [AuthorService],
})
export class AuthorModule {}
