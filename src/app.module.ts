import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { UserGamesModule } from './user-games/user-games.module';
import { ConsolesModule } from './consoles/consoles.module';
import { PlatformsModule } from './platforms/platforms.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GamesModule,
    UserGamesModule,
    ConsolesModule,
    PlatformsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
