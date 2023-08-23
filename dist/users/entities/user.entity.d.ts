import UserGames from 'src/user-games/entities/user-game.entity';
export declare class User {
    id: string;
    user_games: UserGames;
    name: string;
    email: string;
    password: string;
    hashPassword(): void;
}
