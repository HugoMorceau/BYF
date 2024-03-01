import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prediction } from 'src/module/predictions/entities/prediction.entity';
import { Event } from 'src/module/events/entities/event.entity';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'predicted_events' })
@ObjectType()
export class PredictedEvent {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => AuditableEntity, { prefix: false })
  audit: AuditableEntity;

  @Column()
  predictionId: number;

  @Column()
  eventId: number;

  // Relations PredictedEvent 1,1 - 0,n Prediction
  @ManyToOne(() => Prediction, (prediction) => prediction.predictedEvents)
  prediction: Prediction;

  // Relations PredictedEvent 1,1 - 0,n Event
  @ManyToOne(() => Event, (event) => event.predictedEvents)
  event: Event;
}
