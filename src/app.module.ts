import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [MovieModule, BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
