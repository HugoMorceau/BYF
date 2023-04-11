import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CelebritiesOrganizationsService } from './celebrities-organizations.service';
import { CelebrityOrganization } from './entities/celebrity-organization.entity';
import { CreateCelebritiesOrganizationInput } from './dto/create-celebrity-organization.input';
import { UpdateCelebritiesOrganizationInput } from './dto/update-celebrity-organization.input';

@Resolver(() => CelebrityOrganization)
export class CelebritiesOrganizationsResolver {
  constructor(
    private readonly celebritiesOrganizationsService: CelebritiesOrganizationsService,
  ) {}

  @Mutation(() => CelebrityOrganization)
  createCelebritiesOrganization(
    @Args('createCelebritiesOrganizationInput')
    createCelebritiesOrganizationInput: CreateCelebritiesOrganizationInput,
  ) {
    return this.celebritiesOrganizationsService.create(
      createCelebritiesOrganizationInput,
    );
  }

  @Query(() => [CelebrityOrganization], { name: 'celebritiesOrganizations' })
  findAll() {
    return this.celebritiesOrganizationsService.findAll();
  }

  @Query(() => CelebrityOrganization, { name: 'celebritiesOrganization' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.celebritiesOrganizationsService.findOne(id);
  }

  @Mutation(() => CelebrityOrganization)
  updateCelebritiesOrganization(
    @Args('updateCelebritiesOrganizationInput')
    updateCelebritiesOrganizationInput: UpdateCelebritiesOrganizationInput,
  ) {
    return this.celebritiesOrganizationsService.update(
      updateCelebritiesOrganizationInput.id,
      updateCelebritiesOrganizationInput,
    );
  }

  @Mutation(() => CelebrityOrganization)
  removeCelebritiesOrganization(@Args('id', { type: () => Int }) id: number) {
    return this.celebritiesOrganizationsService.remove(id);
  }
}
