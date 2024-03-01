import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePredictedEventInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
