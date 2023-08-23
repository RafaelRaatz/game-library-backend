import { Game } from 'src/games/entities/game.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('consoles')
export class Console {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Game)
  @JoinColumn({ name: 'game_console' })
  game: Game;

  @Column()
  game_console: string;
}
