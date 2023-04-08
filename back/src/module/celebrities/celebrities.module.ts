import { Module } from '@nestjs/common';
import { CelebritiesService } from './celebrities.service';
import { CelebritiesResolver } from './celebrities.resolver';
import { Celebrity } from './entities/celebrity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Celebrity]), UsersModule],
  providers: [CelebritiesResolver, CelebritiesService],
})
export class CelebritiesModule {}
