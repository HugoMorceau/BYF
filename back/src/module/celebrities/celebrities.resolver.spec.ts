import { Test, TestingModule } from '@nestjs/testing';
import { CelebritiesResolver } from './celebrities.resolver';
import { CelebritiesService } from './celebrities.service';

describe('CelebritiesResolver', () => {
  let resolver: CelebritiesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CelebritiesResolver, CelebritiesService],
    }).compile();

    resolver = module.get<CelebritiesResolver>(CelebritiesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
