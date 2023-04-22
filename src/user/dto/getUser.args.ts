import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ArgsType()
export class getUserArgs {
  @Field()
  @IsEmail()
  email: string;
}
