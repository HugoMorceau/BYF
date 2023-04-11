import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PredictionsEvidencesService } from './predictions-evidences.service';
import { PredictionsEvidence } from './entities/prediction-evidence.entity';
import { CreatePredictionsEvidenceInput } from './dto/create-prediction-evidence.input';
import { UpdatePredictionsEvidenceInput } from './dto/update-prediction-evidence.input';

@Resolver(() => PredictionsEvidence)
export class PredictionsEvidencesResolver {
  constructor(
    private readonly predictionsEvidencesService: PredictionsEvidencesService,
  ) {}

  @Mutation(() => PredictionsEvidence)
  createPredictionsEvidence(
    @Args('createPredictionsEvidenceInput')
    createPredictionsEvidenceInput: CreatePredictionsEvidenceInput,
  ) {
    return this.predictionsEvidencesService.create(
      createPredictionsEvidenceInput,
    );
  }

  @Query(() => [PredictionsEvidence], { name: 'predictionsEvidences' })
  findAll() {
    return this.predictionsEvidencesService.findAll();
  }

  @Query(() => PredictionsEvidence, { name: 'predictionsEvidence' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.predictionsEvidencesService.findOne(id);
  }

  @Mutation(() => PredictionsEvidence)
  updatePredictionsEvidence(
    @Args('updatePredictionsEvidenceInput')
    updatePredictionsEvidenceInput: UpdatePredictionsEvidenceInput,
  ) {
    return this.predictionsEvidencesService.update(
      updatePredictionsEvidenceInput.id,
      updatePredictionsEvidenceInput,
    );
  }

  @Mutation(() => PredictionsEvidence)
  removePredictionsEvidence(@Args('id', { type: () => Int }) id: number) {
    return this.predictionsEvidencesService.remove(id);
  }
}
