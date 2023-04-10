import { Module } from '@nestjs/common';
import { EvidencesService } from './evidences.service';
import { EvidencesResolver } from './evidences.resolver';

@Module({
  providers: [EvidencesResolver, EvidencesService]
})
export class EvidencesModule {}
