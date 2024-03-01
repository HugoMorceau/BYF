import { Test, TestingModule } from '@nestjs/testing';
import { PredictedIndicatorsService } from './predicted-indicators.service';

describe('PredictedIndicatorsService', () => {
  let service: PredictedIndicatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredictedIndicatorsService],
    }).compile();

    service = module.get<PredictedIndicatorsService>(PredictedIndicatorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
