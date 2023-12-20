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
import { Author } from "../author/base/Author";
import { Tag } from "../tag/base/Tag";
import { TagFindManyArgs } from "../tag/base/TagFindManyArgs";

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
    return await this.service.findMany(args);
  }

  @graphql.Query(() => Post, { nullable: true })
  @Public()
  async post(@graphql.Args() args: PostFindUniqueArgs): Promise<Post | null> {
    return await this.service.findOne(args);
  }

  @graphql.ResolveField(() => [Tag])
  async tags(
    @graphql.Parent() parent: Post,
    @graphql.Args() args: TagFindManyArgs
  ): Promise<Tag[]> {
    return await this.service.findTags(parent.id, args);
  }

  @graphql.ResolveField(() => Author, { nullable: true })
  async author(@graphql.Parent() parent: Post): Promise<Author | null> {
    return await this.service.getAuthor(parent.id);
  }
}
