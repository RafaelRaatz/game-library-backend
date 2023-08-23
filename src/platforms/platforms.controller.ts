import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { CreatePlatformDto } from './dto/create-platform.dto';

@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformsService: PlatformsService) {}

  @Post()
  create(@Body() createPlatformDto: CreatePlatformDto) {
    return this.platformsService.create(createPlatformDto);
  }

  @Get()
  findAll() {
    return this.platformsService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.platformsService.remove(id);
  }
}
