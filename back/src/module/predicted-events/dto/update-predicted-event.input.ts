import { CreatePredictedEventInput } from './create-predicted-event.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePredictedEventInput extends PartialType(CreatePredictedEventInput) {
  @Field(() => Int)
  id: number;
}
