import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePredictedIndicatorInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
