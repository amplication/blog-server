/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TagCreateInput } from "./TagCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateTagArgs {
  @ApiProperty({
    required: true,
    type: () => TagCreateInput,
  })
  @ValidateNested()
  @Type(() => TagCreateInput)
  @Field(() => TagCreateInput, { nullable: false })
  data!: TagCreateInput;
}

export { CreateTagArgs };
