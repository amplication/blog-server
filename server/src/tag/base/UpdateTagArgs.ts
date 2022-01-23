import { ArgsType, Field } from "@nestjs/graphql";
import { TagWhereUniqueInput } from "./TagWhereUniqueInput";
import { TagUpdateInput } from "./TagUpdateInput";

@ArgsType()
class UpdateTagArgs {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  where!: TagWhereUniqueInput;
  @Field(() => TagUpdateInput, { nullable: false })
  data!: TagUpdateInput;
}

export { UpdateTagArgs };
