import { Injectable } from '@nestjs/common';
import { CreatePredictedIndicatorInput } from './dto/create-predicted-indicator.input';
import { UpdatePredictedIndicatorInput } from './dto/update-predicted-indicator.input';

@Injectable()
export class PredictedIndicatorsService {
  create(createPredictedIndicatorInput: CreatePredictedIndicatorInput) {
    return 'This action adds a new predictedIndicator';
  }

  findAll() {
    return `This action returns all predictedIndicators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} predictedIndicator`;
  }

  update(id: number, updatePredictedIndicatorInput: UpdatePredictedIndicatorInput) {
    return `This action updates a #${id} predictedIndicator`;
  }

  remove(id: number) {
    return `This action removes a #${id} predictedIndicator`;
  }
}
