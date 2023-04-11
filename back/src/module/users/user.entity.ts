import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Celebrity } from 'src/module/celebrities/entities/celebrity.entity';
import { AuditableEntity } from '../shared/entities/auditable.entity';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @Field(() => Int) // GraphQL
  @PrimaryGeneratedColumn() // TypeORM
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  birthDate: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Column(() => AuditableEntity, { prefix: false })
  audit: AuditableEntity;

  // Relations

  // User 0,n - 0,1 Celebrity
  @OneToMany(() => Celebrity, (celebrity) => celebrity.user)
  @Field(() => [Celebrity], { nullable: true })
  celebrity?: Celebrity[];
}
