import { Test, TestingModule } from '@nestjs/testing';
import { EvidencesResolver } from './evidences.resolver';
import { EvidencesService } from './evidences.service';

describe('EvidencesResolver', () => {
  let resolver: EvidencesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvidencesResolver, EvidencesService],
    }).compile();

    resolver = module.get<EvidencesResolver>(EvidencesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
