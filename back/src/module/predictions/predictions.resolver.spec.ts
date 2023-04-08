import { Test, TestingModule } from '@nestjs/testing';
import { PredictionsResolver } from './predictions.resolver';
import { PredictionsService } from './predictions.service';

describe('PredictionsResolver', () => {
  let resolver: PredictionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredictionsResolver, PredictionsService],
    }).compile();

    resolver = module.get<PredictionsResolver>(PredictionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
