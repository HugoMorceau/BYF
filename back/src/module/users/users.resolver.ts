import { Resolver, Query } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  pets(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
