import { Test, TestingModule } from '@nestjs/testing';
import { PredictionsEvidencesService } from './predictions-evidences.service';

describe('PredictionsEvidencesService', () => {
  let service: PredictionsEvidencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredictionsEvidencesService],
    }).compile();

    service = module.get<PredictionsEvidencesService>(PredictionsEvidencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
