import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TagResolverBase } from "./base/tag.resolver.base";
import { Tag } from "./base/Tag";
import { TagService } from "./tag.service";
import { Public } from "../decorators/public.decorator";
import { TagFindManyArgs } from "./base/TagFindManyArgs";
import { TagFindUniqueArgs } from "./base/TagFindUniqueArgs";
import { Post } from "src/post/base/Post";
import { PostFindManyArgs } from "src/post/base/PostFindManyArgs";

@graphql.Resolver(() => Tag)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TagResolver extends TagResolverBase {
  constructor(
    protected readonly service: TagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @graphql.Query(() => [Tag])
  @Public()
  async tags(@graphql.Args() args: TagFindManyArgs): Promise<Tag[]> {
    return await this.service.findMany(args);
  }

  @graphql.Query(() => Tag, { nullable: true })
  @Public()
  async tag(@graphql.Args() args: TagFindUniqueArgs): Promise<Tag | null> {
    return await this.service.findOne(args);
  }

  @graphql.ResolveField(() => [Post])
  async posts(
    @graphql.Parent() parent: Tag,
    @graphql.Args() args: PostFindManyArgs
  ): Promise<Post[]> {
    return await this.service.findPosts(parent.id, args);
  }
}
