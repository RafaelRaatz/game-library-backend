import { Repository, EntityRepository } from 'typeorm';
import { Game } from './entities/game.entity';

@EntityRepository(Game)
export class GamesRepository extends Repository<Game> {
  public async findById(id: string): Promise<Game | undefined> {
    const game = this.findOne({
      where: {
        id,
      },
    });

    return game;
  }
}

export default GamesRepository;
