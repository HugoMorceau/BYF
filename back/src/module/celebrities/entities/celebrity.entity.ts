import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from 'src/module/users/user.entity';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { CelebrityOrganization } from 'src/module/celebrities-organizations/entities/celebrity-organization.entity';

@Entity({ name: 'celebrities' })
@ObjectType()
export class Celebrity extends AuditableEntity {
  @Field(() => Int) // GraphQL
  @PrimaryGeneratedColumn() // TypeORM
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  // Birthdate
  @Field()
  @Column()
  birthDate: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  userId?: number;

  // Associated User if any
  @ManyToOne(() => User, (user) => user.celebrity, { onDelete: 'SET NULL' })
  // If the user is deleted, the celebrity.user will be set to null
  @JoinColumn({ name: 'fk_celebrity_user_userId' })
  @Field(() => User, { nullable: true })
  user?: User;

  @OneToMany(
    () => CelebrityOrganization,
    (celebrityOrganization) => celebrityOrganization.celebrity,
  )
  @Field(() => [CelebrityOrganization], { nullable: true })
  celebrityOrganizations: CelebrityOrganization[];
}
