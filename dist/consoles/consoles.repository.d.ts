import { Game } from 'src/games/entities/game.entity';
import { Repository } from 'typeorm';
import { Console } from './entities/console.entity';
interface IRequest {
    game: Game;
}
export declare class ConsoleRepository extends Repository<Console> {
    createOrder({ game }: IRequest): Promise<Console>;
}
export {};
