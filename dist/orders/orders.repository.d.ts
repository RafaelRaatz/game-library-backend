import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import OrdersGames from './entities/orderGames.entity';
interface IGame {
    game_id: string;
}
interface IRequest {
    user: User;
    games: IGame[];
}
export declare class OrdersRepository extends Repository<OrdersGames> {
    createOrder({ user, games }: IRequest): Promise<OrdersGames>;
}
export default OrdersRepository;
