import { IsString } from 'class-validator';
import UserGames from '../entities/user-game.entity';

export class GetUserGamesFilterDto {
  @IsString()
  user_id: UserGames['user_id'];
}
