import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Author } from "../../author/base/Author";
import { ValidateNested, IsString, IsDate, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Tag } from "../../tag/base/Tag";
@ObjectType()
class Post {
  @ApiProperty({
    required: true,
    type: () => Author,
  })
  @ValidateNested()
  @Type(() => Author)
  author?: Author;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  content!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Tag],
  })
  @ValidateNested()
  @Type(() => Tag)
  @IsOptional()
  tags?: Array<Tag>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Post };
