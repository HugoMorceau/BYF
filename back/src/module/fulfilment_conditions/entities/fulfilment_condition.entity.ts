import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
