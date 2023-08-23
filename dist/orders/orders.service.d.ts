import { Repository } from 'typeorm';
import Order from './entities/order.entity';
export declare class ShowOrdersService {
    private readonly OrderRepository;
    constructor(OrderRepository: Repository<Order>);
    findOne(id: string): Promise<Order>;
}
