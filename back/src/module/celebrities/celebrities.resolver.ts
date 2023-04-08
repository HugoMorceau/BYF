import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CelebritiesService } from './celebrities.service';
import { Celebrity } from './entities/celebrity.entity';
import { CreateCelebrityInput } from './dto/create-celebrity.input';
import { UpdateCelebrityInput } from './dto/update-celebrity.input';

@Resolver(() => Celebrity)
export class CelebritiesResolver {
  constructor(private readonly celebritiesService: CelebritiesService) {}

  @Mutation(() => Celebrity)
  createCelebrity(
    @Args('createCelebrityInput') createCelebrityInput: CreateCelebrityInput,
  ) {
    return this.celebritiesService.create(createCelebrityInput);
  }

  @Query(() => [Celebrity], { name: 'celebrities' })
  findAll() {
    return this.celebritiesService.findAll();
  }

  @Query(() => Celebrity, { name: 'celebrity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.celebritiesService.findOne(id);
  }

  @Mutation(() => Celebrity)
  updateCelebrity(
    @Args('updateCelebrityInput') updateCelebrityInput: UpdateCelebrityInput,
  ) {
    return this.celebritiesService.update(
      updateCelebrityInput.id,
      updateCelebrityInput,
    );
  }

  @Mutation(() => Celebrity)
  removeCelebrity(@Args('id', { type: () => Int }) id: number) {
    return this.celebritiesService.remove(id);
  }
}
