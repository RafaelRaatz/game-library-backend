import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { Platform } from './entities/platform.entity';

@Injectable()
export class PlatformsService {
  constructor(
    @InjectRepository(Platform)
    private readonly PlatformRepository: Repository<Platform>,
  ) {}

  async create(createPlatformDto: CreatePlatformDto) {
    const platform = this.PlatformRepository.create(createPlatformDto);
    const platformExists = await this.PlatformRepository.findOneBy(
      createPlatformDto,
    );

    if (platformExists) {
      throw new NotFoundException('there is already a platform with this name');
    }
    await this.PlatformRepository.save(platform);

    return platform;
  }

  findAll() {
    return this.PlatformRepository.find();
  }

  async remove(id: string) {
    const platform = await this.PlatformRepository.findOneBy({ id: id });
    if (!platform) {
      throw new NotFoundException(`game ID ${id} not found`);
    }

    return this.PlatformRepository.remove(platform);
  }
}
