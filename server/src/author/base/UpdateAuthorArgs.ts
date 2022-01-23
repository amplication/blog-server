import { ArgsType, Field } from "@nestjs/graphql";
import { AuthorWhereUniqueInput } from "./AuthorWhereUniqueInput";
import { AuthorUpdateInput } from "./AuthorUpdateInput";

@ArgsType()
class UpdateAuthorArgs {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  where!: AuthorWhereUniqueInput;
  @Field(() => AuthorUpdateInput, { nullable: false })
  data!: AuthorUpdateInput;
}

export { UpdateAuthorArgs };
