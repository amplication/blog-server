import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StoryService } from "./story.service";
import { StoryControllerBase } from "./base/story.controller.base";

@swagger.ApiTags("stories")
@common.Controller("stories")
export class StoryController extends StoryControllerBase {
  constructor(
    protected readonly service: StoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
