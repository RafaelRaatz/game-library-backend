import { IsString } from 'class-validator';

export class CreateUserGameDto {
  @IsString()
  user_id: string;

  @IsString()
  game_id: string;
}
