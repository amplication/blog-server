import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PostResolverBase } from "./base/post.resolver.base";
import { Post } from "./base/Post";
import { PostService } from "./post.service";
import { PostFindManyArgs } from "./base/PostFindManyArgs";
import { Public } from "../decorators/public.decorator";
import { PostFindUniqueArgs } from "./base/PostFindUniqueArgs";

@graphql.Resolver(() => Post)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PostResolver extends PostResolverBase {
  constructor(
    protected readonly service: PostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @graphql.Query(() => [Post])
  @Public()
  async posts(@graphql.Args() args: PostFindManyArgs): Promise<Post[]> {
    console.log({ args });
    console.log({ ff: args.where?.tags });

    return await this.service.findMany(args);
  }

  @graphql.Query(() => Post, { nullable: true })
  @Public()
  async post(@graphql.Args() args: PostFindUniqueArgs): Promise<Post | null> {
    return await this.service.findOne(args);
  }
}
