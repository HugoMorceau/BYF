import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { dataSourceOptions } from '../ormconfig';
import { UsersModule } from './module/users/users.module';
import { CelebritiesModule } from './module/celebrities/celebrities.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UsersModule,
    CelebritiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
