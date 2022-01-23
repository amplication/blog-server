import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthorWhereInput } from "./AuthorWhereInput";
import { Type } from "class-transformer";
import { AuthorOrderByInput } from "./AuthorOrderByInput";

@ArgsType()
class AuthorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AuthorWhereInput,
  })
  @Field(() => AuthorWhereInput, { nullable: true })
  @Type(() => AuthorWhereInput)
  where?: AuthorWhereInput;

  @ApiProperty({
    required: false,
    type: AuthorOrderByInput,
  })
  @Field(() => AuthorOrderByInput, { nullable: true })
  @Type(() => AuthorOrderByInput)
  orderBy?: AuthorOrderByInput;

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

export { AuthorFindManyArgs };
