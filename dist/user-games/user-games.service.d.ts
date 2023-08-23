import { Repository } from 'typeorm';
import { CreateUserGameDto } from './dto/create-user-game.dto';
import UserGames from './entities/user-game.entity';
import { GetUserGamesFilterDto } from './dto/get-user-games-filter.dto';
export declare class UserGamesService {
    private readonly UserGamesRepository;
    constructor(UserGamesRepository: Repository<UserGames>);
    findAll(): Promise<UserGames[]>;
    getUserGamesWithFilter(filterDto: GetUserGamesFilterDto): Promise<UserGames[]>;
    create(createUserGameDto: CreateUserGameDto): Promise<UserGames>;
    findOne(id: string): Promise<UserGames>;
    remove(id: string): Promise<UserGames>;
}
