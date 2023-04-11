import { CreateEvidenceInput } from './create-evidence.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEvidenceInput extends PartialType(CreateEvidenceInput) {
  @Field(() => Int)
  id: number;
}
