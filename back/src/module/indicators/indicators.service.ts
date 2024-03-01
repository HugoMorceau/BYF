import { Injectable } from '@nestjs/common';
import { CreateIndicatorInput } from './dto/create-indicator.input';
import { UpdateIndicatorInput } from './dto/update-indicator.input';

@Injectable()
export class IndicatorsService {
  create(createIndicatorInput: CreateIndicatorInput) {
    return 'This action adds a new indicator';
  }

  findAll() {
    return `This action returns all indicators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} indicator`;
  }

  update(id: number, updateIndicatorInput: UpdateIndicatorInput) {
    return `This action updates a #${id} indicator`;
  }

  remove(id: number) {
    return `This action removes a #${id} indicator`;
  }
}
