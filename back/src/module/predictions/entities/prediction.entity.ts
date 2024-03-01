import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Celebrity } from 'src/module/celebrities/entities/celebrity.entity';
import { PredictionEvidence } from 'src/module/predictions-evidences/entities/prediction-evidence.entity';
import { PredictedEvent } from 'src/module/predicted-events/entities/predicted-event.entity';

import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'predictions' })
@ObjectType()
export class Prediction {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field({
    description: 'Prediction description',
  })
  @Column()
  description: string;

  @Field({
    description: 'The date at which the prediction is supposed to happen',
  })
  @Column()
  predictedDate: Date;

  @Field({
    description: 'The date at which the prediction was fulfilled',
    nullable: true,
  })
  @Column({ nullable: true })
  fulfilledDate?: Date;

  @Field({ description: 'The date at which the prediction was made' })
  @Column()
  predictionDate: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  confidenceLevel?: number;

  @Column(() => AuditableEntity, { prefix: false })
  audit: AuditableEntity;

  // Relations

  // Prediction 0,1 - 0,n Celebrity
  @ManyToOne(() => Celebrity, (celebrity) => celebrity.predictions)
  @Field(() => Celebrity)
  celebrity: Celebrity;

  // Prediction 0,n - 1,1 PredictionEvidence
  @OneToMany(
    () => PredictionEvidence,
    (predictionEvidence) => predictionEvidence.prediction,
  )
  @Field(() => [PredictionEvidence], { nullable: true })
  predictionEvidences: PredictionEvidence[];

  // Prediction 0,n - 1,1 PredictedEvent
  @OneToMany(
    () => PredictedEvent,
    (predictedEvent) => predictedEvent.prediction,
  )
  @Field(() => [PredictedEvent], { nullable: true })
  predictedEvents: PredictedEvent[];
}
