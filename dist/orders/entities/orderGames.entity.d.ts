import { Game } from 'src/games/entities/game.entity';
import { User } from 'src/users/entities/user.entity';
declare class OrdersGames {
    id: number;
    user: User;
    game: Game;
    order_id: string;
    game_id: string;
}
export default OrdersGames;
