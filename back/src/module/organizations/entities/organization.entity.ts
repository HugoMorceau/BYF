import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Celebrity } from 'src/module/celebrities/entities/celebrity.entity';

@Entity()
@ObjectType()
export class Organization {
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

  @ManyToMany(() => Celebrity, (celebrity) => celebrity.organizations)
  @JoinTable()
  @Field(() => [Celebrity], { nullable: true })
  celebrities: Celebrity[];
}
