import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PredictedEvent } from 'src/module/predicted-events/entities/predicted-event.entity';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'events' })
@ObjectType()
export class Event {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field({ description: 'Event description' })
  @Column()
  description: string;

  @Field({ description: 'Event expected date' })
  @Column({ nullable: true })
  expectedDate: Date;

  @Field({ description: 'Event date' })
  @Column({ nullable: true })
  date: Date;

  @Field({ description: 'Event location' })
  @Column({ nullable: true })
  location: string;

  @Field({ description: 'Event link' })
  @Column({ nullable: true })
  link: string;

  @Field({ description: 'Event image' })
  @Column({ nullable: true })
  image: string;

  // Event status
  // 0 - Not started
  // 1 - In progress
  // 2 - Finished
  @Field({ description: 'Event status' })
  @Column()
  status: number;

  @Column(() => AuditableEntity, { prefix: false })
  audit: AuditableEntity;

  @OneToMany(() => PredictedEvent, (predictedEvent) => predictedEvent.event)
  @Field(() => [PredictedEvent], { nullable: true })
  predictedEvents: PredictedEvent[];
}
