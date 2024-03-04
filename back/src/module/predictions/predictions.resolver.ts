import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PredictionsService } from './predictions.service';
import { Prediction } from './entities/prediction.entity';
import { CreatePredictionInput } from './dto/create-prediction.input';
// import { UpdatePredictionInput } from './dto/update-prediction.input';

@Resolver(() => Prediction)
export class PredictionsResolver {
  constructor(private readonly predictionsService: PredictionsService) {}

  @Mutation(() => Prediction)
  createPrediction(
    @Args('createPredictionInput') createPredictionInput: CreatePredictionInput,
  ) {
    return this.predictionsService.create(createPredictionInput);
  }

  @Query(() => [Prediction], { name: 'predictions' })
  findAll() {
    return this.predictionsService.findAll();
  }

  @Query(() => Prediction, { name: 'prediction' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.predictionsService.findOne(id);
  }

  // @Mutation(() => Prediction)
  // updatePrediction(
  //   @Args('updatePredictionInput') updatePredictionInput: UpdatePredictionInput,
  // ) {
  //   return this.predictionsService.update(
  //     updatePredictionInput.id,
  //     updatePredictionInput,
  //   );
  // }

  // @Mutation(() => Prediction)
  // removePrediction(@Args('id', { type: () => Int }) id: number) {
  //   return this.predictionsService.remove(id);
  // }
}
