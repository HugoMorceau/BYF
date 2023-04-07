import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Celebrity {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
