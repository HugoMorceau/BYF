import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFulfilmentConditionInput {
  @Field({ nullable: true })
  description?: string;
}
