/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { PostCreateNestedManyWithoutTagsInput } from "./PostCreateNestedManyWithoutTagsInput";
import { Type } from "class-transformer";
@InputType()
class TagCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => PostCreateNestedManyWithoutTagsInput,
  })
  @ValidateNested()
  @Type(() => PostCreateNestedManyWithoutTagsInput)
  @IsOptional()
  @Field(() => PostCreateNestedManyWithoutTagsInput, {
    nullable: true,
  })
  posts?: PostCreateNestedManyWithoutTagsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  slug?: string | null;
}
export { TagCreateInput };
