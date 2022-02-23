/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthorWhereUniqueInput } from "../../author/base/AuthorWhereUniqueInput";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class PostCreateInput {
  @ApiProperty({
    required: true,
    type: () => AuthorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AuthorWhereUniqueInput)
  @Field(() => AuthorWhereUniqueInput)
  author!: AuthorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  content!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  featuredImage!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;
}
export { PostCreateInput };
