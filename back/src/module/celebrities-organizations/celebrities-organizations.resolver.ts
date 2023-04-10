import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CelebritiesOrganizationsService } from './celebrities-organizations.service';
import { CelebritiesOrganization } from './entities/celebrity-organization.entity';
import { CreateCelebritiesOrganizationInput } from './dto/create-celebrity-organization.input';
import { UpdateCelebritiesOrganizationInput } from './dto/update-celebrity-organization.input';

@Resolver(() => CelebritiesOrganization)
export class CelebritiesOrganizationsResolver {
  constructor(
    private readonly celebritiesOrganizationsService: CelebritiesOrganizationsService,
  ) {}

  @Mutation(() => CelebritiesOrganization)
  createCelebritiesOrganization(
    @Args('createCelebritiesOrganizationInput')
    createCelebritiesOrganizationInput: CreateCelebritiesOrganizationInput,
  ) {
    return this.celebritiesOrganizationsService.create(
      createCelebritiesOrganizationInput,
    );
  }

  @Query(() => [CelebritiesOrganization], { name: 'celebritiesOrganizations' })
  findAll() {
    return this.celebritiesOrganizationsService.findAll();
  }

  @Query(() => CelebritiesOrganization, { name: 'celebritiesOrganization' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.celebritiesOrganizationsService.findOne(id);
  }

  @Mutation(() => CelebritiesOrganization)
  updateCelebritiesOrganization(
    @Args('updateCelebritiesOrganizationInput')
    updateCelebritiesOrganizationInput: UpdateCelebritiesOrganizationInput,
  ) {
    return this.celebritiesOrganizationsService.update(
      updateCelebritiesOrganizationInput.id,
      updateCelebritiesOrganizationInput,
    );
  }

  @Mutation(() => CelebritiesOrganization)
  removeCelebritiesOrganization(@Args('id', { type: () => Int }) id: number) {
    return this.celebritiesOrganizationsService.remove(id);
  }
}
