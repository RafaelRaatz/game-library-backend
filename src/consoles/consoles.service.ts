import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConsoleDto } from './dto/create-console.dto';
import { Console } from './entities/console.entity';

@Injectable()
export class ConsolesService {
  constructor(
    @InjectRepository(Console)
    private readonly ConsoleRepository: Repository<Console>,
  ) {}
  async create(createConsoleDto: CreateConsoleDto) {
    const console = this.ConsoleRepository.create(createConsoleDto);

    const consoleExists = await this.ConsoleRepository.findOneBy(
      createConsoleDto,
    );

    if (consoleExists) {
      throw new BadRequestException('this game/user is already linked');
    }

    await this.ConsoleRepository.save(console);

    return console;
  }

  findAll() {
    return this.ConsoleRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} console`;
  }

  remove(id: number) {
    return `This action removes a #${id} console`;
  }
}
