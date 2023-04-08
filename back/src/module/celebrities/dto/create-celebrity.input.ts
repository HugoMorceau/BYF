import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCelebrityInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  birthDate: Date;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;
}
