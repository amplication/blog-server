import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PostService } from "./post.service";
import { PostControllerBase } from "./base/post.controller.base";

@swagger.ApiTags("posts")
@common.Controller("posts")
export class PostController extends PostControllerBase {
  constructor(
    protected readonly service: PostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
