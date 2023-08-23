import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
export declare class GamesRepository extends Repository<Game> {
    findById(id: string): Promise<Game | undefined>;
}
export default GamesRepository;
