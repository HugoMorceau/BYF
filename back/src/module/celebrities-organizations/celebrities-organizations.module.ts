import { Module } from '@nestjs/common';
import { CelebritiesOrganizationsService } from './celebrities-organizations.service';
import { CelebritiesOrganizationsResolver } from './celebrities-organizations.resolver';

@Module({
  providers: [CelebritiesOrganizationsResolver, CelebritiesOrganizationsService]
})
export class CelebritiesOrganizationsModule {}
