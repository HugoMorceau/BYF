import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PredictionEvidence } from 'src/module/predictions-evidences/entities/prediction-evidence.entity';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'evidences' })
@ObjectType()
export class Evidence {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => AuditableEntity, { prefix: false })
  audit: AuditableEntity;

  // Evidence 0,n - 0,1 PredictionEvidence
  @OneToMany(
    () => PredictionEvidence,
    (predictionEvidences) => predictionEvidences.evidence,
  )
  @Field(() => [PredictionEvidence], { nullable: true })
  predictionEvidences: PredictionEvidence[];
}
