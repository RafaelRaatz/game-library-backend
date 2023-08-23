import { Module } from '@nestjs/common';
import { UserGamesService } from './user-games.service';
import { UserGamesController } from './user-games.controller';
import UserGames from './entities/user-game.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserGames])],
  controllers: [UserGamesController],
  providers: [UserGamesService],
})
export class UserGamesModule {}
