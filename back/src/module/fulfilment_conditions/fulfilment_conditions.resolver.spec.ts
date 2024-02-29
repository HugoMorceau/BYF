import { Test, TestingModule } from '@nestjs/testing';
import { FulfilmentConditionsResolver } from './fulfilment_conditions.resolver';
import { FulfilmentConditionsService } from './fulfilment_conditions.service';

describe('FulfilmentConditionsResolver', () => {
  let resolver: FulfilmentConditionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FulfilmentConditionsResolver, FulfilmentConditionsService],
    }).compile();

    resolver = module.get<FulfilmentConditionsResolver>(
      FulfilmentConditionsResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
