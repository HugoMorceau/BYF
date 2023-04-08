import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsResolver } from './organizations.resolver';

@Module({
  providers: [OrganizationsResolver, OrganizationsService]
})
export class OrganizationsModule {}
