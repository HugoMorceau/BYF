import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateFulfilmentConditionInput } from './dto/create-fulfilment_condition.input';
import { UpdateFulfilmentConditionInput } from './dto/update-fulfilment_condition.input';
import { FulfilmentCondition } from './entities/fulfilment_condition.entity';
import { FulfilmentConditionsService } from './fulfilment_conditions.service';

@Resolver(() => FulfilmentCondition)
export class FulfilmentConditionsResolver {
  constructor(
    private readonly fulfilmentConditionsService: FulfilmentConditionsService,
  ) {}

  @Mutation(() => FulfilmentCondition)
  createFulfilmentCondition(
    @Args('createFulfilmentConditionInput')
    createFulfilmentConditionInput: CreateFulfilmentConditionInput,
  ) {
    return this.fulfilmentConditionsService.create(
      createFulfilmentConditionInput,
    );
  }

  @Query(() => [FulfilmentCondition], { name: 'fulfilmentConditions' })
  findAll() {
    return this.fulfilmentConditionsService.findAll();
  }

  @Query(() => FulfilmentCondition, { name: 'fulfilmentCondition' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fulfilmentConditionsService.findOne(id);
  }

  @Mutation(() => FulfilmentCondition)
  updateFulfilmentCondition(
    @Args('updateFulfilmentConditionInput')
    updateFulfilmentConditionInput: UpdateFulfilmentConditionInput,
  ) {
    return this.fulfilmentConditionsService.update(
      updateFulfilmentConditionInput.id,
      updateFulfilmentConditionInput,
    );
  }

  @Mutation(() => FulfilmentCondition)
  removeFulfilmentCondition(@Args('id', { type: () => Int }) id: number) {
    return this.fulfilmentConditionsService.remove(id);
  }
}
