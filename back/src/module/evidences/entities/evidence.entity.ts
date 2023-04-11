import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PredictionEvidence } from 'src/module/predictions-evidences/entities/prediction-evidence.entity';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'evidences' })
@ObjectType()
export class Evidence extends AuditableEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  // Evidence 0,n - 0,1 PredictionEvidence
  @OneToMany(
    () => PredictionEvidence,
    (predictionEvidences) => predictionEvidences.evidence,
  )
  @Field(() => [PredictionEvidence], { nullable: true })
  predictionEvidences: PredictionEvidence[];
}
