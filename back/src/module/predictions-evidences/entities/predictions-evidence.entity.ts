import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PredictionsEvidence {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
