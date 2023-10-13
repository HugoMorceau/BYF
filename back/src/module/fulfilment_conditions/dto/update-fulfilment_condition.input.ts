import { CreateFulfilmentConditionInput } from './create-fulfilment_condition.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFulfilmentConditionInput extends PartialType(CreateFulfilmentConditionInput) {
  @Field(() => Int)
  id: number;
}
