import { Module } from '@nestjs/common';
import { PredictionsService } from './predictions.service';
import { PredictionsResolver } from './predictions.resolver';

@Module({
  providers: [PredictionsResolver, PredictionsService]
})
export class PredictionsModule {}
