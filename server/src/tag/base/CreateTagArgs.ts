import { ArgsType, Field } from "@nestjs/graphql";
import { TagCreateInput } from "./TagCreateInput";

@ArgsType()
class CreateTagArgs {
  @Field(() => TagCreateInput, { nullable: false })
  data!: TagCreateInput;
}

export { CreateTagArgs };
