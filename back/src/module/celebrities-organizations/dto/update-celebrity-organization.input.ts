import { CreateCelebritiesOrganizationInput } from './create-celebrity-organization.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCelebritiesOrganizationInput extends PartialType(CreateCelebritiesOrganizationInput) {
  @Field(() => Int)
  id: number;
}
