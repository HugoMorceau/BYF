import { Module } from '@nestjs/common';
import { FulfilmentConditionsService } from './fulfilment_conditions.service';
import { FulfilmentConditionsResolver } from './fulfilment_conditions.resolver';

@Module({
  providers: [FulfilmentConditionsResolver, FulfilmentConditionsService]
})
export class FulfilmentConditionsModule {}
