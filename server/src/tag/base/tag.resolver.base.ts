/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Tag } from "./Tag";
import { TagCountArgs } from "./TagCountArgs";
import { TagFindManyArgs } from "./TagFindManyArgs";
import { TagFindUniqueArgs } from "./TagFindUniqueArgs";
import { CreateTagArgs } from "./CreateTagArgs";
import { UpdateTagArgs } from "./UpdateTagArgs";
import { DeleteTagArgs } from "./DeleteTagArgs";
import { PostFindManyArgs } from "../../post/base/PostFindManyArgs";
import { Post } from "../../post/base/Post";
import { TagService } from "../tag.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Tag)
export class TagResolverBase {
  constructor(
    protected readonly service: TagService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _tagsMeta(
    @graphql.Args() args: TagCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @Public()
  @graphql.Query(() => [Tag])
  async tags(@graphql.Args() args: TagFindManyArgs): Promise<Tag[]> {
    return this.service.tags(args);
  }

  @Public()
  @graphql.Query(() => Tag, { nullable: true })
  async tag(@graphql.Args() args: TagFindUniqueArgs): Promise<Tag | null> {
    const result = await this.service.tag(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tag)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "create",
    possession: "any",
  })
  async createTag(@graphql.Args() args: CreateTagArgs): Promise<Tag> {
    return await this.service.createTag({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tag)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "update",
    possession: "any",
  })
  async updateTag(@graphql.Args() args: UpdateTagArgs): Promise<Tag | null> {
    try {
      return await this.service.updateTag({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tag)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "delete",
    possession: "any",
  })
  async deleteTag(@graphql.Args() args: DeleteTagArgs): Promise<Tag | null> {
    try {
      return await this.service.deleteTag(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => [Post], { name: "posts" })
  async findPosts(
    @graphql.Parent() parent: Tag,
    @graphql.Args() args: PostFindManyArgs
  ): Promise<Post[]> {
    const results = await this.service.findPosts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
