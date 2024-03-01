import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IndicatorsService } from './indicators.service';
import { Indicator } from './entities/indicator.entity';
import { CreateIndicatorInput } from './dto/create-indicator.input';
import { UpdateIndicatorInput } from './dto/update-indicator.input';

@Resolver(() => Indicator)
export class IndicatorsResolver {
  constructor(private readonly indicatorsService: IndicatorsService) {}

  @Mutation(() => Indicator)
  createIndicator(@Args('createIndicatorInput') createIndicatorInput: CreateIndicatorInput) {
    return this.indicatorsService.create(createIndicatorInput);
  }

  @Query(() => [Indicator], { name: 'indicators' })
  findAll() {
    return this.indicatorsService.findAll();
  }

  @Query(() => Indicator, { name: 'indicator' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.indicatorsService.findOne(id);
  }

  @Mutation(() => Indicator)
  updateIndicator(@Args('updateIndicatorInput') updateIndicatorInput: UpdateIndicatorInput) {
    return this.indicatorsService.update(updateIndicatorInput.id, updateIndicatorInput);
  }

  @Mutation(() => Indicator)
  removeIndicator(@Args('id', { type: () => Int }) id: number) {
    return this.indicatorsService.remove(id);
  }
}
