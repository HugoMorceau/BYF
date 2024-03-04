import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePredictionInput {
  @Field()
  title: string;

  @Field()
  description: string;
}
