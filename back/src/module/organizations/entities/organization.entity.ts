import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CelebrityOrganization } from 'src/module/celebrities-organizations/entities/celebrity-organization.entity';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';

@Entity({ name: 'organizations' })
@ObjectType()
export class Organization {
  @Field(() => Int) // GraphQL
  @PrimaryGeneratedColumn() // TypeORM
  id: number;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  userId?: number;

  @Column(() => AuditableEntity, { prefix: false })
  audit: AuditableEntity;

  @OneToMany(
    () => CelebrityOrganization,
    (celebrityOrganization) => celebrityOrganization.organization,
  )
  @Field(() => [CelebrityOrganization], { nullable: true })
  celebrityOrganizations: CelebrityOrganization[];
}
