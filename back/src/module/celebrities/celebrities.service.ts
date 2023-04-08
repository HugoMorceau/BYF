import { Injectable } from '@nestjs/common';
import { CreateCelebrityInput } from './dto/create-celebrity.input';
import { UpdateCelebrityInput } from './dto/update-celebrity.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Celebrity } from './entities/celebrity.entity';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable()
export class CelebritiesService {
  constructor(
    @InjectRepository(Celebrity)
    private celebritiesRepository: Repository<Celebrity>,
    private readonly usersService: UsersService,
  ) {}

  create(
    createCelebrityInput: CreateCelebrityInput,
    createdBy: number,
  ): Promise<Celebrity> {
    const newCelebrity =
      this.celebritiesRepository.create(createCelebrityInput);
    newCelebrity.createdBy = createdBy;
    return this.celebritiesRepository.save(newCelebrity);
  }

  findAll(): Promise<Celebrity[]> {
    return this.celebritiesRepository.find();
  }
  getUser(userID: number): Promise<User> {
    return this.usersService.findOne(userID);
  }

  findOne(id: number): Promise<Celebrity> {
    return this.celebritiesRepository.findOneOrFail({ where: { id } });
  }

  update(id: number, updateCelebrityInput: UpdateCelebrityInput) {
    // todo
    return `This action updates a #${id} celebrity`;
  }

  remove(id: number) {
    // todo
    return `This action removes a #${id} celebrity`;
  }
}
