import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TagWhereUniqueInput } from "src/tag/base/TagWhereUniqueInput";

@InputType()
class TagCreateNestedManyWithoutPostsInput {
  @ApiProperty({
    required: false,
    type: [TagWhereUniqueInput],
  })
  @Field(() => [TagWhereUniqueInput])
  connect?: TagWhereUniqueInput[];
}
export { TagCreateNestedManyWithoutPostsInput };
