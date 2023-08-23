import { Module } from '@nestjs/common';
import { ConsolesService } from './consoles.service';
import { ConsolesController } from './consoles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Console } from './entities/console.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Console])],
  controllers: [ConsolesController],
  providers: [ConsolesService],
})
export class ConsolesModule {}
