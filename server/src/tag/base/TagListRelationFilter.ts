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
import { TagWhereInput } from "./TagWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TagListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TagWhereInput,
  })
  @ValidateNested()
  @Type(() => TagWhereInput)
  @IsOptional()
  @Field(() => TagWhereInput, {
    nullable: true,
  })
  every?: TagWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagWhereInput,
  })
  @ValidateNested()
  @Type(() => TagWhereInput)
  @IsOptional()
  @Field(() => TagWhereInput, {
    nullable: true,
  })
  some?: TagWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagWhereInput,
  })
  @ValidateNested()
  @Type(() => TagWhereInput)
  @IsOptional()
  @Field(() => TagWhereInput, {
    nullable: true,
  })
  none?: TagWhereInput;
}
export { TagListRelationFilter };
