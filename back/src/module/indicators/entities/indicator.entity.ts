import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PredictedIndicator } from 'src/module/predicted-indicators/entities/predicted-indicator.entity';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'indicators' })
@ObjectType()
export class Indicator {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field({ description: 'Indicator description' })
  @Column()
  description: string;

  @Field({ description: 'Indicator value' })
  @Column()
  value: number;

  // Units : €, $, %, ...
  @Field({ description: 'Indicator value units' })
  @Column()
  units: string;

  @Field({ description: 'Indicator link' })
  @Column()
  link: string;

  @Field({ description: 'Indicator image' })
  @Column()
  image: string;

  @Column(() => AuditableEntity, { prefix: false })
  audit: AuditableEntity;

  @OneToMany(
    () => PredictedIndicator,
    (predictedIndicator) => predictedIndicator.indicator,
  )
  @Field(() => [PredictedIndicator], { nullable: true })
  predictedIndicators: PredictedIndicator[];
}
