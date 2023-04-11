import { Module } from '@nestjs/common';
import { PredictionsEvidencesService } from './predictions-evidences.service';
import { PredictionsEvidencesResolver } from './predictions-evidences.resolver';

@Module({
  providers: [PredictionsEvidencesResolver, PredictionsEvidencesService]
})
export class PredictionsEvidencesModule {}
