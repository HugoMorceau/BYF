import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Evidence {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
