import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TagWhereInput } from "./TagWhereInput";
import { Type } from "class-transformer";
import { TagOrderByInput } from "./TagOrderByInput";

@ArgsType()
class TagFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TagWhereInput,
  })
  @Field(() => TagWhereInput, { nullable: true })
  @Type(() => TagWhereInput)
  where?: TagWhereInput;

  @ApiProperty({
    required: false,
    type: TagOrderByInput,
  })
  @Field(() => TagOrderByInput, { nullable: true })
  @Type(() => TagOrderByInput)
  orderBy?: TagOrderByInput;

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

export { TagFindManyArgs };
