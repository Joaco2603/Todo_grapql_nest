import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  description: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  done?: boolean;
}
