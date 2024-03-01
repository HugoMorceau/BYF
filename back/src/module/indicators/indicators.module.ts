import { Module } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { IndicatorsResolver } from './indicators.resolver';

@Module({
  providers: [IndicatorsResolver, IndicatorsService]
})
export class IndicatorsModule {}
