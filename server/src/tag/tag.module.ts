import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TagModuleBase } from "./base/tag.module.base";
import { TagService } from "./tag.service";
import { TagController } from "./tag.controller";
import { TagResolver } from "./tag.resolver";

@Module({
  imports: [TagModuleBase, forwardRef(() => AuthModule)],
  controllers: [TagController],
  providers: [TagService, TagResolver],
  exports: [TagService],
})
export class TagModule {}
