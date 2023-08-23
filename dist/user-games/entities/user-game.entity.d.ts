import { Game } from 'src/games/entities/game.entity';
import { User } from 'src/users/entities/user.entity';
declare class UserGames {
    id: string;
    user: User;
    game: Game;
    user_id: string;
    game_id: string;
}
export default UserGames;
