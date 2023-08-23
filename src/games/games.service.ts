import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private readonly GameRepository: Repository<Game>,
  ) {}
  async create(createGameDto: CreateGameDto) {
    const game = this.GameRepository.create(createGameDto);
    const gameExists = await this.GameRepository.findOneBy(createGameDto);

    if (gameExists) {
      throw new NotFoundException('there is already a game with this name');
    }
    await this.GameRepository.save(game);

    return game;
  }

  findAll() {
    return this.GameRepository.find();
  }

  findOne(id: string) {
    const gameExists = this.GameRepository.findOneBy({ id: id });
    if (!gameExists) {
      throw new NotFoundException(`Game ID ${id} not found`);
    }
    return gameExists;
  }

  async update(id: any, updateGameDto: UpdateGameDto) {
    const game = await this.GameRepository.preload({
      id,
      ...updateGameDto,
    });

    if (!game) {
      throw new NotFoundException(`Game ID ${id} not found`);
    }

    return this.GameRepository.save(game);
  }

  async remove(id: string) {
    const game = await this.GameRepository.findOneBy({ id: id });
    if (!game) {
      throw new NotFoundException(`game ID ${id} not found`);
    }

    return this.GameRepository.remove(game);
  }
}
