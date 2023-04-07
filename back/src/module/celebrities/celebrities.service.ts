import { Injectable } from '@nestjs/common';
import { CreateCelebrityInput } from './dto/create-celebrity.input';
import { UpdateCelebrityInput } from './dto/update-celebrity.input';

@Injectable()
export class CelebritiesService {
  create(createCelebrityInput: CreateCelebrityInput) {
    return 'This action adds a new celebrity';
  }

  findAll() {
    return `This action returns all celebrities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} celebrity`;
  }

  update(id: number, updateCelebrityInput: UpdateCelebrityInput) {
    return `This action updates a #${id} celebrity`;
  }

  remove(id: number) {
    return `This action removes a #${id} celebrity`;
  }
}
