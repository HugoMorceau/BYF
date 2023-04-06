import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

import * as ormConfig from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'byf',
      password: 'byf',
      database: 'byf',
      // entities: ['src/entity/*.ts'],
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      migrations: ['src/migration/*.ts'],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
