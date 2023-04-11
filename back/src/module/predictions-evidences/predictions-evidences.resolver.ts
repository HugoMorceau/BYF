import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PredictionsEvidencesService } from './predictions-evidences.service';
import { PredictionEvidence } from './entities/prediction-evidence.entity';
import { CreatePredictionsEvidenceInput } from './dto/create-prediction-evidence.input';
import { UpdatePredictionsEvidenceInput } from './dto/update-prediction-evidence.input';

@Resolver(() => PredictionEvidence)
export class PredictionsEvidencesResolver {
  constructor(
    private readonly predictionsEvidencesService: PredictionsEvidencesService,
  ) {}

  @Mutation(() => PredictionEvidence)
  createPredictionsEvidence(
    @Args('createPredictionsEvidenceInput')
    createPredictionsEvidenceInput: CreatePredictionsEvidenceInput,
  ) {
    return this.predictionsEvidencesService.create(
      createPredictionsEvidenceInput,
    );
  }

  @Query(() => [PredictionEvidence], { name: 'predictionsEvidences' })
  findAll() {
    return this.predictionsEvidencesService.findAll();
  }

  @Query(() => PredictionEvidence, { name: 'predictionsEvidence' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.predictionsEvidencesService.findOne(id);
  }

  @Mutation(() => PredictionEvidence)
  updatePredictionsEvidence(
    @Args('updatePredictionsEvidenceInput')
    updatePredictionsEvidenceInput: UpdatePredictionsEvidenceInput,
  ) {
    return this.predictionsEvidencesService.update(
      updatePredictionsEvidenceInput.id,
      updatePredictionsEvidenceInput,
    );
  }

  @Mutation(() => PredictionEvidence)
  removePredictionsEvidence(@Args('id', { type: () => Int }) id: number) {
    return this.predictionsEvidencesService.remove(id);
  }
}
