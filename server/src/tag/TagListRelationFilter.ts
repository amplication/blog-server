import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { TagWhereInput } from "./base/TagWhereInput";

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
