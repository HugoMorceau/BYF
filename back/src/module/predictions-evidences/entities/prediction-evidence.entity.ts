import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Evidence } from 'src/module/evidences/entities/evidence.entity';
import { Prediction } from 'src/module/predictions/entities/prediction.entity';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'predictions_evidences' })
@ObjectType()
export class PredictionEvidence extends AuditableEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  // TOCHECK: Evidence status and type could be moved here if needed

  // predictions_evidences 1,1 - 0,n predictions
  @ManyToOne(() => Prediction, (prediction) => prediction.predictionEvidences, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  prediction: Prediction;

  // predictions_evidences 1,1 - 0,n evidences
  @ManyToOne(() => Evidence, (evidence) => evidence.predictionEvidences, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  evidence: Evidence;
}
