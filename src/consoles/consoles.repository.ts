import { Game } from 'src/games/entities/game.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Console } from './entities/console.entity';

interface IRequest {
  game: Game;
}

@EntityRepository(Console)
export class ConsoleRepository extends Repository<Console> {
  public async createOrder({ game }: IRequest): Promise<Console> {
    const order = this.create(game);

    await this.save(order);

    return order;
  }
}
