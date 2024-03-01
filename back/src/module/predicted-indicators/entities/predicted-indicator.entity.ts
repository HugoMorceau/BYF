import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prediction } from 'src/module/predictions/entities/prediction.entity';
import { Indicator } from 'src/module/indicators/entities/indicator.entity';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'predicted_indicators' })
@ObjectType()
export class PredictedIndicator {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => AuditableEntity, { prefix: false })
  audit: AuditableEntity;

  @Column()
  predictionId: number;

  @Column()
  indicatorId: number;

  @ManyToOne(() => Prediction, (prediction) => prediction.predictedIndicators)
  prediction: Prediction;

  @ManyToOne(() => Indicator, (indicator) => indicator.predictedIndicators)
  indicator: Indicator;
}
