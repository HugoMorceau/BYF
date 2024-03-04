import { Module } from '@nestjs/common';
import { PredictionsService } from './predictions.service';
import { PredictionsResolver } from './predictions.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prediction } from './entities/prediction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prediction])],
  controllers: [],
  providers: [PredictionsResolver, PredictionsService],
  exports: [PredictionsService],
})
export class PredictionsModule {}
