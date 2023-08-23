import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Get,
  Query,
} from '@nestjs/common';
import { UserGamesService } from './user-games.service';
import { CreateUserGameDto } from './dto/create-user-game.dto';
import { GetUserGamesFilterDto } from './dto/get-user-games-filter.dto';
import UserGames from './entities/user-game.entity';

@Controller('user-games')
export class UserGamesController {
  constructor(private readonly userGamesService: UserGamesService) {}

  @Post()
  create(@Body() createUserGameDto: CreateUserGameDto) {
    return this.userGamesService.create(createUserGameDto);
  }

  @Get()
  GetUserGames(
    @Query() filterDto: GetUserGamesFilterDto,
  ): Promise<UserGames[]> {
    return this.userGamesService.getUserGamesWithFilter(filterDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userGamesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userGamesService.remove(id);
  }
}
