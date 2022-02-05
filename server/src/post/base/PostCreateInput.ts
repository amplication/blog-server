import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthorWhereUniqueInput } from "../../author/base/AuthorWhereUniqueInput";
import { ValidateNested, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { TagCreateNestedManyWithoutPostsInput } from "./TagCreateNestedManyWithoutPostsInput";
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

  @ApiProperty({
    required: false,
    type: TagCreateNestedManyWithoutPostsInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TagCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  tags?: TagCreateNestedManyWithoutPostsInput;
}
export { PostCreateInput };
