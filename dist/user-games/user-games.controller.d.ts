import { UserGamesService } from './user-games.service';
import { CreateUserGameDto } from './dto/create-user-game.dto';
import { GetUserGamesFilterDto } from './dto/get-user-games-filter.dto';
import UserGames from './entities/user-game.entity';
export declare class UserGamesController {
    private readonly userGamesService;
    constructor(userGamesService: UserGamesService);
    create(createUserGameDto: CreateUserGameDto): Promise<UserGames>;
    GetUserGames(filterDto: GetUserGamesFilterDto): Promise<UserGames[]>;
    findOne(id: string): Promise<UserGames>;
    remove(id: string): Promise<UserGames>;
}
