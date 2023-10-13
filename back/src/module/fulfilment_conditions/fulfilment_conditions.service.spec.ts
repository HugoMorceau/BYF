import { Test, TestingModule } from '@nestjs/testing';
import { FulfilmentConditionsService } from './fulfilment_conditions.service';

describe('FulfilmentConditionsService', () => {
  let service: FulfilmentConditionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FulfilmentConditionsService],
    }).compile();

    service = module.get<FulfilmentConditionsService>(FulfilmentConditionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
