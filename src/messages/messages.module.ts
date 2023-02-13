import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesSevice } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepository, MessagesSevice]
})

export class MessagesModule {}
