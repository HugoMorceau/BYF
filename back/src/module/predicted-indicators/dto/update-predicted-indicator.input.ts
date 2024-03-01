import { CreatePredictedIndicatorInput } from './create-predicted-indicator.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePredictedIndicatorInput extends PartialType(CreatePredictedIndicatorInput) {
  @Field(() => Int)
  id: number;
}
