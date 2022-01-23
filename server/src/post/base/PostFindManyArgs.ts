import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PostWhereInput } from "./PostWhereInput";
import { Type } from "class-transformer";
import { PostOrderByInput } from "./PostOrderByInput";

@ArgsType()
class PostFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PostWhereInput,
  })
  @Field(() => PostWhereInput, { nullable: true })
  @Type(() => PostWhereInput)
  where?: PostWhereInput;

  @ApiProperty({
    required: false,
    type: PostOrderByInput,
  })
  @Field(() => PostOrderByInput, { nullable: true })
  @Type(() => PostOrderByInput)
  orderBy?: PostOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PostFindManyArgs };
