import { CreatePredictionInput } from './create-prediction.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePredictionInput extends PartialType(CreatePredictionInput) {
  @Field(() => Int)
  id: number;
}
