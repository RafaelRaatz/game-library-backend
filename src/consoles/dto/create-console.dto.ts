import { IsString } from 'class-validator';

export class CreateConsoleDto {
  @IsString()
  game_console: string;
}
