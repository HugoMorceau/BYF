import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from '../ormconfig';
import { CelebritiesOrganizationsModule } from './module/celebrities-organizations/celebrities-organizations.module';
import { CelebritiesModule } from './module/celebrities/celebrities.module';
import { EvidencesModule } from './module/evidences/evidences.module';
import { FulfilmentConditionsModule } from './module/fulfilment_conditions/fulfilment_conditions.module';
import { OrganizationsModule } from './module/organizations/organizations.module';
import { PredictionsEvidencesModule } from './module/predictions-evidences/predictions-evidences.module';
import { PredictionsModule } from './module/predictions/predictions.module';
import { UsersModule } from './module/users/users.module';
import { FulfilmentConditionsEvidencesModule } from './module/fulfilment_conditions-evidences/fulfilment_conditions-evidences.module';
import { FulfilmentConditionsPredictionsModule } from './module/fulfilment_conditions-predictions/fulfilment_conditions-predictions.module';
import { EventsModule } from './module/events/events.module';
import { IndicatorsModule } from './module/indicators/indicators.module';
import { PredictedEventsModule } from './module/predicted-events/predicted-events.module';

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
    FulfilmentConditionsModule,
    FulfilmentConditionsEvidencesModule,
    FulfilmentConditionsPredictionsModule,
    EventsModule,
    IndicatorsModule,
    PredictedEventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
