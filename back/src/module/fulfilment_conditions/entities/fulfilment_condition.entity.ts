import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { FulfilmentConditionEvidence } from './fulfilment-condition-evidence.entity';

@ObjectType()
export class FulfilmentCondition {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, {
    description: 'Prediction title',
  })
  @Column()
  title: string;

  @Field({
    description: 'Prediction description',
  })
  @Column()
  description: string;

  @Column(() => AuditableEntity, { prefix: false })
  audit: AuditableEntity;
  // Relations

  // FulfilmentCondition 0,n - 0,N Evidence => Relationship established in FulfilmentConditionEvidence entity
  // FulfilmentCondition 0,n - 1,1 FulfilmentConditionEvidence

  @OneToMany(
    () => FulfilmentConditionEvidence,
    (fulfilmentConditionEvidence) =>
      fulfilmentConditionEvidence.fulfilmentCondition,
  )
  @Field(() => [FulfilmentConditionEvidence], { nullable: true })
  fulfilmentConditionEvidences?: FulfilmentConditionEvidence[];
}
