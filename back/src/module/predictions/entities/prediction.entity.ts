import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Celebrity } from 'src/module/celebrities/entities/celebrity.entity';
import { PredictionEvidence } from 'src/module/predictions-evidences/entities/prediction-evidence.entity';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'predictions' })
@ObjectType()
export class Prediction extends AuditableEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
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

  // Prediction 0,1 - 0,n Celebrity
  @ManyToOne(() => Celebrity, (celebrity) => celebrity.predictions)
  @Field(() => Celebrity)
  celebrity: Celebrity;

  // Prediction 0,n - 0,n Evidence
  // Prediction 0,n - 1,1 PredictionEvidence
  @OneToMany(
    () => PredictionEvidence,
    (predictionEvidence) => predictionEvidence.prediction,
  )
  @Field(() => [PredictionEvidence], { nullable: true })
  predictionEvidences: PredictionEvidence[];

  // TODO: Tags relation
}
