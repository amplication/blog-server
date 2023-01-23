import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuthorService } from "./author.service";
import { AuthorControllerBase } from "./base/author.controller.base";

@swagger.ApiTags("authors")
@common.Controller("authors")
export class AuthorController extends AuthorControllerBase {
  constructor(
    protected readonly service: AuthorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
