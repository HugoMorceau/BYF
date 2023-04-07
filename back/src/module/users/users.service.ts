import { User } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findAll(): Promise<User[]> {
    const user = new User();
    user.id = 1;
    user.firstName = 'John';
    user.lastName = 'Doe';
    user.email = 'Jhondoe@email';
    return [user];
  }
}
