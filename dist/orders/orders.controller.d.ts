/// <reference types="express" />
import { CreateOrdersService } from './createOrders.service';
import { ShowOrdersService } from './showOrders.service';
export declare class OrdersController {
    private readonly showOrdersService;
    private readonly createOrder;
    constructor(showOrdersService: ShowOrdersService, createOrder: CreateOrdersService);
    create({ user_id, games }: {
        user_id: any;
        games: any;
    }): Promise<import("express").Response<any, Record<string, any>>>;
    findOne(id: string): Promise<import("./entities/orderGames.entity").default>;
}
