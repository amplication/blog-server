import { ArgsType, Field } from "@nestjs/graphql";
import { AuthorWhereUniqueInput } from "./AuthorWhereUniqueInput";

@ArgsType()
class DeleteAuthorArgs {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  where!: AuthorWhereUniqueInput;
}

export { DeleteAuthorArgs };
