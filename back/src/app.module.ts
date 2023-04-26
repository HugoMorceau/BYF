import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { dataSourceOptions } from '../ormconfig';
import { UsersModule } from './module/users/users.module';
import { CelebritiesModule } from './module/celebrities/celebrities.module';
import { OrganizationsModule } from './module/organizations/organizations.module';
import { PredictionsModule } from './module/predictions/predictions.module';
import { CelebritiesOrganizationsModule } from './module/celebrities-organizations/celebrities-organizations.module';
import { EvidencesModule } from './module/evidences/evidences.module';
import { PredictionsEvidencesModule } from './module/predictions-evidences/predictions-evidences.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './src/config/.env',
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UsersModule,
    CelebritiesModule,
    OrganizationsModule,
    PredictionsModule,
    CelebritiesOrganizationsModule,
    EvidencesModule,
    PredictionsEvidencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
