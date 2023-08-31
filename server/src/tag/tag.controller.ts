import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TagService } from "./tag.service";
import { TagControllerBase } from "./base/tag.controller.base";

@swagger.ApiTags("tags")
@common.Controller("tags")
export class TagController extends TagControllerBase {
  constructor(
    protected readonly service: TagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
