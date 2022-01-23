import { ArgsType, Field } from "@nestjs/graphql";
import { TagWhereUniqueInput } from "./TagWhereUniqueInput";

@ArgsType()
class TagFindUniqueArgs {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  where!: TagWhereUniqueInput;
}

export { TagFindUniqueArgs };
