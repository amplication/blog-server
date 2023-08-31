/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateAuthorArgs } from "./CreateAuthorArgs";
import { UpdateAuthorArgs } from "./UpdateAuthorArgs";
import { DeleteAuthorArgs } from "./DeleteAuthorArgs";
import { AuthorCountArgs } from "./AuthorCountArgs";
import { AuthorFindManyArgs } from "./AuthorFindManyArgs";
import { AuthorFindUniqueArgs } from "./AuthorFindUniqueArgs";
import { Author } from "./Author";
import { PostFindManyArgs } from "../../post/base/PostFindManyArgs";
import { Post } from "../../post/base/Post";
import { AuthorService } from "../author.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Author)
export class AuthorResolverBase {
  constructor(
    protected readonly service: AuthorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _authorsMeta(
    @graphql.Args() args: AuthorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @Public()
  @graphql.Query(() => [Author])
  async authors(@graphql.Args() args: AuthorFindManyArgs): Promise<Author[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Author, { nullable: true })
  async author(
    @graphql.Args() args: AuthorFindUniqueArgs
  ): Promise<Author | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Author)
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "create",
    possession: "any",
  })
  async createAuthor(@graphql.Args() args: CreateAuthorArgs): Promise<Author> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Author)
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  async updateAuthor(
    @graphql.Args() args: UpdateAuthorArgs
  ): Promise<Author | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Author)
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "delete",
    possession: "any",
  })
  async deleteAuthor(
    @graphql.Args() args: DeleteAuthorArgs
  ): Promise<Author | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => [Post], { name: "posts" })
  async resolveFieldPosts(
    @graphql.Parent() parent: Author,
    @graphql.Args() args: PostFindManyArgs
  ): Promise<Post[]> {
    const results = await this.service.findPosts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
