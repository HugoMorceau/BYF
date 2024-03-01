import { Test, TestingModule } from '@nestjs/testing';
import { PredictedEventsService } from './predicted-events.service';

describe('PredictedEventsService', () => {
  let service: PredictedEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredictedEventsService],
    }).compile();

    service = module.get<PredictedEventsService>(PredictedEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
