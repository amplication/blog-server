import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StoryModuleBase } from "./base/story.module.base";
import { StoryService } from "./story.service";
import { StoryController } from "./story.controller";
import { StoryResolver } from "./story.resolver";

@Module({
  imports: [StoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [StoryController],
  providers: [StoryService, StoryResolver],
  exports: [StoryService],
})
export class StoryModule {}
