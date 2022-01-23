import { ArgsType, Field } from "@nestjs/graphql";
import { PostWhereUniqueInput } from "./PostWhereUniqueInput";

@ArgsType()
class PostFindUniqueArgs {
  @Field(() => PostWhereUniqueInput, { nullable: false })
  where!: PostWhereUniqueInput;
}

export { PostFindUniqueArgs };
