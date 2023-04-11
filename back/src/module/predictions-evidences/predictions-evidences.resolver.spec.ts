import { Test, TestingModule } from '@nestjs/testing';
import { PredictionsEvidencesResolver } from './predictions-evidences.resolver';
import { PredictionsEvidencesService } from './predictions-evidences.service';

describe('PredictionsEvidencesResolver', () => {
  let resolver: PredictionsEvidencesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredictionsEvidencesResolver, PredictionsEvidencesService],
    }).compile();

    resolver = module.get<PredictionsEvidencesResolver>(PredictionsEvidencesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
