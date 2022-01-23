import { ArgsType, Field } from "@nestjs/graphql";
import { PostWhereUniqueInput } from "./PostWhereUniqueInput";

@ArgsType()
class DeletePostArgs {
  @Field(() => PostWhereUniqueInput, { nullable: false })
  where!: PostWhereUniqueInput;
}

export { DeletePostArgs };
