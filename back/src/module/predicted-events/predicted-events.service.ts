import { Injectable } from '@nestjs/common';
import { CreatePredictedEventInput } from './dto/create-predicted-event.input';
import { UpdatePredictedEventInput } from './dto/update-predicted-event.input';

@Injectable()
export class PredictedEventsService {
  create(createPredictedEventInput: CreatePredictedEventInput) {
    return 'This action adds a new predictedEvent';
  }

  findAll() {
    return `This action returns all predictedEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} predictedEvent`;
  }

  update(id: number, updatePredictedEventInput: UpdatePredictedEventInput) {
    return `This action updates a #${id} predictedEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} predictedEvent`;
  }
}
