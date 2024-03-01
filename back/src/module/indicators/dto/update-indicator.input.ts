import { CreateIndicatorInput } from './create-indicator.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIndicatorInput extends PartialType(CreateIndicatorInput) {
  @Field(() => Int)
  id: number;
}
