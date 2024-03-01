import { Test, TestingModule } from '@nestjs/testing';
import { PredictedEventsResolver } from './predicted-events.resolver';
import { PredictedEventsService } from './predicted-events.service';

describe('PredictedEventsResolver', () => {
  let resolver: PredictedEventsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredictedEventsResolver, PredictedEventsService],
    }).compile();

    resolver = module.get<PredictedEventsResolver>(PredictedEventsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
