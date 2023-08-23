import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    create(createGameDto: CreateGameDto): Promise<import("./entities/game.entity").Game>;
    findAll(): Promise<import("./entities/game.entity").Game[]>;
    findOne(id: string): Promise<import("./entities/game.entity").Game>;
    update(id: any, updateGameDto: UpdateGameDto): Promise<import("./entities/game.entity").Game>;
    remove(id: string): Promise<import("./entities/game.entity").Game>;
}
