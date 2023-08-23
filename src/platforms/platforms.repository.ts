import { Repository, EntityRepository } from 'typeorm';
import { Platform } from './entities/platform.entity';

@EntityRepository(Platform)
export class PlatformRepository extends Repository<Platform> {
  public async findById(id: string): Promise<Platform | undefined> {
    const platform = this.findOne({
      where: {
        id,
      },
    });

    return platform;
  }
}

export default PlatformRepository;