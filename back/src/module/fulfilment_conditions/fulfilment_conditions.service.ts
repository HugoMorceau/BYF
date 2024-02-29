import { Injectable } from '@nestjs/common';
import { CreateFulfilmentConditionInput } from './dto/create-fulfilment_condition.input';
import { UpdateFulfilmentConditionInput } from './dto/update-fulfilment_condition.input';

@Injectable()
export class FulfilmentConditionsService {
  create(createFulfilmentConditionInput: CreateFulfilmentConditionInput) {
    return 'This action adds a new fulfilmentCondition';
  }

  findAll() {
    return `This action returns all fulfilmentConditions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fulfilmentCondition`;
  }

  update(
    id: number,
    updateFulfilmentConditionInput: UpdateFulfilmentConditionInput,
  ) {
    return `This action updates a #${id} fulfilmentCondition`;
  }

  remove(id: number) {
    return `This action removes a #${id} fulfilmentCondition`;
  }
}
