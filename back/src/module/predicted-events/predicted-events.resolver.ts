import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PredictedEventsService } from './predicted-events.service';
import { PredictedEvent } from './entities/predicted-event.entity';
import { CreatePredictedEventInput } from './dto/create-predicted-event.input';
import { UpdatePredictedEventInput } from './dto/update-predicted-event.input';

@Resolver(() => PredictedEvent)
export class PredictedEventsResolver {
  constructor(private readonly predictedEventsService: PredictedEventsService) {}

  @Mutation(() => PredictedEvent)
  createPredictedEvent(@Args('createPredictedEventInput') createPredictedEventInput: CreatePredictedEventInput) {
    return this.predictedEventsService.create(createPredictedEventInput);
  }

  @Query(() => [PredictedEvent], { name: 'predictedEvents' })
  findAll() {
    return this.predictedEventsService.findAll();
  }

  @Query(() => PredictedEvent, { name: 'predictedEvent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.predictedEventsService.findOne(id);
  }

  @Mutation(() => PredictedEvent)
  updatePredictedEvent(@Args('updatePredictedEventInput') updatePredictedEventInput: UpdatePredictedEventInput) {
    return this.predictedEventsService.update(updatePredictedEventInput.id, updatePredictedEventInput);
  }

  @Mutation(() => PredictedEvent)
  removePredictedEvent(@Args('id', { type: () => Int }) id: number) {
    return this.predictedEventsService.remove(id);
  }
}
