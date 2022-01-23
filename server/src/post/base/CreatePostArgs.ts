import { ArgsType, Field } from "@nestjs/graphql";
import { PostCreateInput } from "./PostCreateInput";

@ArgsType()
class CreatePostArgs {
  @Field(() => PostCreateInput, { nullable: false })
  data!: PostCreateInput;
}

export { CreatePostArgs };
