import { Injectable } from '@nestjs/common';
import { CreatePredictionInput } from './dto/create-prediction.input';
import { UpdatePredictionInput } from './dto/update-prediction.input';

@Injectable()
export class PredictionsService {
  create(createPredictionInput: CreatePredictionInput) {
    return 'This action adds a new prediction';
  }

  findAll() {
    return `This action returns all predictions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prediction`;
  }

  update(id: number, updatePredictionInput: UpdatePredictionInput) {
    return `This action updates a #${id} prediction`;
  }

  remove(id: number) {
    return `This action removes a #${id} prediction`;
  }
}
