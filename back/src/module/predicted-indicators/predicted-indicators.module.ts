import { Module } from '@nestjs/common';
import { PredictedIndicatorsService } from './predicted-indicators.service';
import { PredictedIndicatorsResolver } from './predicted-indicators.resolver';

@Module({
  providers: [PredictedIndicatorsResolver, PredictedIndicatorsService]
})
export class PredictedIndicatorsModule {}
