import { Test, TestingModule } from '@nestjs/testing';
import { CelebritiesOrganizationsService } from './celebrities-organizations.service';

describe('CelebritiesOrganizationsService', () => {
  let service: CelebritiesOrganizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CelebritiesOrganizationsService],
    }).compile();

    service = module.get<CelebritiesOrganizationsService>(CelebritiesOrganizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
