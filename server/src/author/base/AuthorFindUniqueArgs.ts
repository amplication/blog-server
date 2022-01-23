import { ArgsType, Field } from "@nestjs/graphql";
import { AuthorWhereUniqueInput } from "./AuthorWhereUniqueInput";

@ArgsType()
class AuthorFindUniqueArgs {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  where!: AuthorWhereUniqueInput;
}

export { AuthorFindUniqueArgs };
