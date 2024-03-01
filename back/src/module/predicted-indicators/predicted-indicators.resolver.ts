import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PredictedIndicatorsService } from './predicted-indicators.service';
import { PredictedIndicator } from './entities/predicted-indicator.entity';
import { CreatePredictedIndicatorInput } from './dto/create-predicted-indicator.input';
import { UpdatePredictedIndicatorInput } from './dto/update-predicted-indicator.input';

@Resolver(() => PredictedIndicator)
export class PredictedIndicatorsResolver {
  constructor(private readonly predictedIndicatorsService: PredictedIndicatorsService) {}

  @Mutation(() => PredictedIndicator)
  createPredictedIndicator(@Args('createPredictedIndicatorInput') createPredictedIndicatorInput: CreatePredictedIndicatorInput) {
    return this.predictedIndicatorsService.create(createPredictedIndicatorInput);
  }

  @Query(() => [PredictedIndicator], { name: 'predictedIndicators' })
  findAll() {
    return this.predictedIndicatorsService.findAll();
  }

  @Query(() => PredictedIndicator, { name: 'predictedIndicator' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.predictedIndicatorsService.findOne(id);
  }

  @Mutation(() => PredictedIndicator)
  updatePredictedIndicator(@Args('updatePredictedIndicatorInput') updatePredictedIndicatorInput: UpdatePredictedIndicatorInput) {
    return this.predictedIndicatorsService.update(updatePredictedIndicatorInput.id, updatePredictedIndicatorInput);
  }

  @Mutation(() => PredictedIndicator)
  removePredictedIndicator(@Args('id', { type: () => Int }) id: number) {
    return this.predictedIndicatorsService.remove(id);
  }
}
