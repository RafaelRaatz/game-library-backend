import UserGames from 'src/user-games/entities/user-game.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  console: string;

  @Column()
  year: string;

  @Column()
  description: string;

  @OneToMany(() => UserGames, (user_games) => user_games.game)
  user_games: UserGames;
}
