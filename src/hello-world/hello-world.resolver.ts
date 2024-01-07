import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { name: 'Hola' })
  helloWorld(): string {
    return 'Hola mundo';
  }

  @Query(() => Float)
  numberRandom(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, { name: 'randomFromZeroToTen' })
  getRandomFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to: number = 6,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
