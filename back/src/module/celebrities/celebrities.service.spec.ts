import { Test, TestingModule } from '@nestjs/testing';
import { CelebritiesService } from './celebrities.service';

describe('CelebritiesService', () => {
  let service: CelebritiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CelebritiesService],
    }).compile();

    service = module.get<CelebritiesService>(CelebritiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
