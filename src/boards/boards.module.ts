import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}

//따라하면서 배우는 NestJS
//https://www.youtube.com/watch?v=3JminDpCJNE
//28:49
