import { InjectRepository } from '@nestjs/typeorm';
import { Prediction } from './entities/prediction.entity';
import { Injectable } from '@nestjs/common';
import { CreatePredictionInput } from './dto/create-prediction.input';

import { Repository } from 'typeorm';

@Injectable()
export class PredictionsService {
  constructor(
    @InjectRepository(Prediction)
    private predictionsRepository: Repository<Prediction>,
  ) {}

  create(createPredictionInput: CreatePredictionInput): Promise<Prediction> {
    // eslint-disable-next-line prettier/prettier
    const newPrediction = this.predictionsRepository.create(createPredictionInput);
    return this.predictionsRepository.save(newPrediction);
  }

  findAll(): Promise<Prediction[]> {
    return this.predictionsRepository.find();
  }

  findOne(id: number): Promise<Prediction> {
    // return this.predictionsRepository.findOne(id);
    return this.predictionsRepository.findOneOrFail({
      where: { id },
    });
  }
}
