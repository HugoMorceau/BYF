import { Test, TestingModule } from '@nestjs/testing';
import { PredictedIndicatorsResolver } from './predicted-indicators.resolver';
import { PredictedIndicatorsService } from './predicted-indicators.service';

describe('PredictedIndicatorsResolver', () => {
  let resolver: PredictedIndicatorsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredictedIndicatorsResolver, PredictedIndicatorsService],
    }).compile();

    resolver = module.get<PredictedIndicatorsResolver>(PredictedIndicatorsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
