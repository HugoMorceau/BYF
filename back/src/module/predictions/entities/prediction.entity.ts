import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'predictions' })
@ObjectType()
export class Prediction {
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

  // TODO: Tags relation
}
