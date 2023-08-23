import OrdersGames from './orderGames.entity';
declare class Order {
    id: string;
    orders_games: OrdersGames[];
    user_id: string;
}
export default Order;
