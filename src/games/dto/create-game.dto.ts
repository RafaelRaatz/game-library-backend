import { IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  name: string;

  @IsString()
  console: string;

  @IsString()
  year: string;

  @IsString()
  description: string;
}
