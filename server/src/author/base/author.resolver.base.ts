import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateAuthorArgs } from "./CreateAuthorArgs";
import { UpdateAuthorArgs } from "./UpdateAuthorArgs";
import { DeleteAuthorArgs } from "./DeleteAuthorArgs";
import { AuthorFindManyArgs } from "./AuthorFindManyArgs";
import { AuthorFindUniqueArgs } from "./AuthorFindUniqueArgs";
import { Author } from "./Author";
import { PostFindManyArgs } from "../../post/base/PostFindManyArgs";
import { Post } from "../../post/base/Post";
import { AuthorService } from "../author.service";

@graphql.Resolver(() => Author)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AuthorResolverBase {
  constructor(
    protected readonly service: AuthorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "read",
    possession: "any",
  })
  async _authorsMeta(
    @graphql.Args() args: AuthorFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Author])
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "read",
    possession: "any",
  })
  async authors(
    @graphql.Args() args: AuthorFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Author[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Author",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Author, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "read",
    possession: "own",
  })
  async author(
    @graphql.Args() args: AuthorFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Author | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Author",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Author)
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "create",
    possession: "any",
  })
  async createAuthor(
    @graphql.Args() args: CreateAuthorArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Author> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Author",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Author"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Author)
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  async updateAuthor(
    @graphql.Args() args: UpdateAuthorArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Author | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Author",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Author"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
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
      // @ts-ignore
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

  @graphql.ResolveField(() => [Post])
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "read",
    possession: "any",
  })
  async posts(
    @graphql.Parent() parent: Author,
    @graphql.Args() args: PostFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Post[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Post",
    });
    const results = await this.service.findPosts(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
