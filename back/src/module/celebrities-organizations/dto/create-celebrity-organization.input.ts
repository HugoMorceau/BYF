import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCelebritiesOrganizationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
