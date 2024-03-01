import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateIndicatorInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
