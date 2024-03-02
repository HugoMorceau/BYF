import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
} from 'typeorm';

export abstract class AuditableEntity extends BaseEntity {
  @Column({ nullable: true })
  createdBy?: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  updatedBy?: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  deletedBy?: string;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt?: Date;
}
