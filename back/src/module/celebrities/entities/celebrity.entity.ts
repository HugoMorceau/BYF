import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/module/users/user.entity';

@Entity()
@ObjectType()
export class Celebrity {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
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

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  userId?: number;

  // Associated User if any
  @ManyToOne(() => User, (user) => user.celebrity)
  @Field(() => User, { nullable: true })
  user?: User;
}
