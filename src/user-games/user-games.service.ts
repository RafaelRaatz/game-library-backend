import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserGameDto } from './dto/create-user-game.dto';
import UserGames from './entities/user-game.entity';
import { GetUserGamesFilterDto } from './dto/get-user-games-filter.dto';

@Injectable()
export class UserGamesService {
  constructor(
    @InjectRepository(UserGames)
    private readonly UserGamesRepository: Repository<UserGames>,
  ) {}

  findAll() {
    return this.UserGamesRepository.find();
  }

  async getUserGamesWithFilter(
    filterDto: GetUserGamesFilterDto,
  ): Promise<UserGames[]> {
    const { user_id } = filterDto;

    const query = this.UserGamesRepository.createQueryBuilder('userGame');

    if (user_id) {
      query.andWhere('userGame.user_id = :user_id', { user_id });
    }

    const userGames = await query.getMany();
    return userGames;
  }

  async create(createUserGameDto: CreateUserGameDto) {
    const userGames = this.UserGamesRepository.create(createUserGameDto);

    const userGamesExists = await this.UserGamesRepository.findOneBy(
      createUserGameDto,
    );

    if (userGamesExists) {
      throw new BadRequestException('this game/user is already linked');
    }

    await this.UserGamesRepository.save(userGames);

    return userGames;
  }

  findOne(id: string) {
    return this.UserGamesRepository.findOneBy({ id: id });
  }

  async remove(id: string) {
    const userGames = await this.UserGamesRepository.findOneBy({ id: id });
    if (!userGames) {
      throw new NotFoundException(`game ID ${id} not found`);
    }

    return this.UserGamesRepository.remove(userGames);
  }
}
