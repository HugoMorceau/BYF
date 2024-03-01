import { Module } from '@nestjs/common';
import { PredictedEventsService } from './predicted-events.service';
import { PredictedEventsResolver } from './predicted-events.resolver';

@Module({
  providers: [PredictedEventsResolver, PredictedEventsService]
})
export class PredictedEventsModule {}
