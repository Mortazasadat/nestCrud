import { IsNotEmpty, MinLength } from 'class-validator';

export class NewUsrDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @MinLength(6, {
    message: 'Password atleast should be 6 characters!',
  })
  password: string;
}
