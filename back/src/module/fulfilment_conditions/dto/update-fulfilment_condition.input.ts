import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateFulfilmentConditionInput } from './create-fulfilment_condition.input';

@InputType()
export class UpdateFulfilmentConditionInput extends PartialType(
  CreateFulfilmentConditionInput,
) {
  @Field(() => Int)
  id: number;
}
