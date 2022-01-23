import { ArgsType, Field } from "@nestjs/graphql";
import { TagWhereUniqueInput } from "./TagWhereUniqueInput";

@ArgsType()
class DeleteTagArgs {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  where!: TagWhereUniqueInput;
}

export { DeleteTagArgs };
