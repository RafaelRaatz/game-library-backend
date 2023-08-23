import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
export declare class GamesService {
    private readonly GameRepository;
    constructor(GameRepository: Repository<Game>);
    create(createGameDto: CreateGameDto): Promise<Game>;
    findAll(): Promise<Game[]>;
    findOne(id: string): Promise<Game>;
    update(id: any, updateGameDto: UpdateGameDto): Promise<Game>;
    remove(id: string): Promise<Game>;
}
