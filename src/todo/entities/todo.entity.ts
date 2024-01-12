import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int, { name: 'uuid' })
  id: number;

  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  done: boolean = false;
}
