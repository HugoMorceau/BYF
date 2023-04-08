import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
} from 'typeorm';

export abstract class AuditableEntity extends BaseEntity {
  @Column({ nullable: true })
  createdBy?: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  updatedBy?: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  deletedBy?: number;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt?: Date;
}
