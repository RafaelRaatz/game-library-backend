import { Repository } from 'typeorm';
import OrdersGames from './entities/orderGames.entity';
export declare class ShowOrdersService {
    private readonly OrderRepository;
    constructor(OrderRepository: Repository<OrdersGames>);
    findOne(id: string): Promise<OrdersGames>;
}
