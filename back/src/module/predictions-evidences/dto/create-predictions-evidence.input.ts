import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePredictionsEvidenceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
