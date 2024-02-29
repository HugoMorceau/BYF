import { Module } from '@nestjs/common';
import { FulfilmentConditionsResolver } from './fulfilment_conditions.resolver';
import { FulfilmentConditionsService } from './fulfilment_conditions.service';

@Module({
  providers: [FulfilmentConditionsResolver, FulfilmentConditionsService],
})
export class FulfilmentConditionsModule {}
