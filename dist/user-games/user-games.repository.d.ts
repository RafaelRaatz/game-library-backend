import { Game } from 'src/games/entities/game.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import UserGames from './entities/user-game.entity';
interface IRequest {
    user: User;
    game: Game;
}
export declare class UserGamesRepository extends Repository<UserGames> {
    createOrder({ user, game }: IRequest): Promise<UserGames>;
}
export {};
