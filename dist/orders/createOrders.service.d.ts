interface IGames {
    id: string;
}
interface IRequest {
    user_id: string;
    games: IGames[];
}
export declare class CreateOrdersService {
    execute({ user_id, games }: IRequest): Promise<import("./entities/orderGames.entity").default>;
}
export {};
