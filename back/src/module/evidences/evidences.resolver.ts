import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EvidencesService } from './evidences.service';
import { Evidence } from './entities/evidence.entity';
import { CreateEvidenceInput } from './dto/create-evidence.input';
import { UpdateEvidenceInput } from './dto/update-evidence.input';

@Resolver(() => Evidence)
export class EvidencesResolver {
  constructor(private readonly evidencesService: EvidencesService) {}

  @Mutation(() => Evidence)
  createEvidence(@Args('createEvidenceInput') createEvidenceInput: CreateEvidenceInput) {
    return this.evidencesService.create(createEvidenceInput);
  }

  @Query(() => [Evidence], { name: 'evidences' })
  findAll() {
    return this.evidencesService.findAll();
  }

  @Query(() => Evidence, { name: 'evidence' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.evidencesService.findOne(id);
  }

  @Mutation(() => Evidence)
  updateEvidence(@Args('updateEvidenceInput') updateEvidenceInput: UpdateEvidenceInput) {
    return this.evidencesService.update(updateEvidenceInput.id, updateEvidenceInput);
  }

  @Mutation(() => Evidence)
  removeEvidence(@Args('id', { type: () => Int }) id: number) {
    return this.evidencesService.remove(id);
  }
}
