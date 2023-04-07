import { CreateCelebrityInput } from './create-celebrity.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCelebrityInput extends PartialType(CreateCelebrityInput) {
  @Field(() => Int)
  id: number;
}
