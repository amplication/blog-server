import { ArgsType, Field } from "@nestjs/graphql";
import { PostWhereUniqueInput } from "./PostWhereUniqueInput";
import { PostUpdateInput } from "./PostUpdateInput";

@ArgsType()
class UpdatePostArgs {
  @Field(() => PostWhereUniqueInput, { nullable: false })
  where!: PostWhereUniqueInput;
  @Field(() => PostUpdateInput, { nullable: false })
  data!: PostUpdateInput;
}

export { UpdatePostArgs };
