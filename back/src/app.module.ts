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
import { CelebrityOrganizationModule } from './module/celebrity-organization/celebrity-organization.module';
import { CelebritiesOrganizationsModule } from './module/celebrities-organizations/celebrities-organizations.module';
import { EvidenceModule } from './module/evidence/evidence.module';
import { EvidencesModule } from './module/evidences/evidences.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UsersModule,
    CelebritiesModule,
    OrganizationsModule,
    PredictionsModule,
    CelebrityOrganizationModule,
    CelebritiesOrganizationsModule,
    EvidenceModule,
    EvidencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
