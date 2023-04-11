import { Test, TestingModule } from '@nestjs/testing';
import { CelebritiesOrganizationsResolver } from './celebrities-organizations.resolver';
import { CelebritiesOrganizationsService } from './celebrities-organizations.service';

describe('CelebritiesOrganizationsResolver', () => {
  let resolver: CelebritiesOrganizationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CelebritiesOrganizationsResolver, CelebritiesOrganizationsService],
    }).compile();

    resolver = module.get<CelebritiesOrganizationsResolver>(CelebritiesOrganizationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
