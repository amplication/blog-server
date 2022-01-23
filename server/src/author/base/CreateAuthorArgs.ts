import { ArgsType, Field } from "@nestjs/graphql";
import { AuthorCreateInput } from "./AuthorCreateInput";

@ArgsType()
class CreateAuthorArgs {
  @Field(() => AuthorCreateInput, { nullable: false })
  data!: AuthorCreateInput;
}

export { CreateAuthorArgs };
