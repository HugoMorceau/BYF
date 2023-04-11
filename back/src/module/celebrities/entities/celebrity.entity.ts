import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from 'src/module/users/user.entity';
import { AuditableEntity } from 'src/module/shared/entities/auditable.entity';
import { CelebrityOrganization } from 'src/module/celebrities-organizations/entities/celebrity-organization.entity';
import { Prediction } from 'src/module/predictions/entities/prediction.entity';

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

  // Celebrity 0,1 - 0,n Users
  // If the user is deleted, the celebrity.user will be set to null
  @ManyToOne(() => User, (user) => user.celebrity, { onDelete: 'SET NULL' })
  @Field(() => User, { nullable: true })
  user?: User;

  // Celebrity 0,n - 0,n Organization
  // Celebrity 0,n - 1,1 CelebrityOrganization
  @OneToMany(
    () => CelebrityOrganization,
    (celebrityOrganization) => celebrityOrganization.celebrity,
  )
  @Field(() => [CelebrityOrganization], { nullable: true })
  celebrityOrganizations: CelebrityOrganization[];

  // Celebrity 0,n - 0,1 Prediction
  @OneToMany(() => Prediction, (prediction) => prediction.celebrity)
  @Field(() => [Prediction], { nullable: true })
  predictions: Prediction[];
}
