import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { Celebrity } from 'src/module/celebrities/entities/celebrity.entity';
import { Organization } from 'src/module/organizations/entities/organization.entity';

@Entity({ name: 'celebrities_organizations' })
@ObjectType()
export class CelebrityOrganization {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  role: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  joinDate?: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  leaveDate?: Date;

  @Column(() => AuditableEntity, { prefix: false })
  audit: AuditableEntity;

  @ManyToOne(() => Celebrity, (celebrity) => celebrity.celebrityOrganizations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  celebrity: Celebrity;

  @ManyToOne(
    () => Organization,
    (organization) => organization.celebrityOrganizations,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn()
  organization: Organization;
}
