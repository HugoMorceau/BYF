import { CreatePredictionsEvidenceInput } from './create-predictions-evidence.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePredictionsEvidenceInput extends PartialType(CreatePredictionsEvidenceInput) {
  @Field(() => Int)
  id: number;
}
