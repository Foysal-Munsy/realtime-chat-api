import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post()
  create(
    @Body() messageData: { content: string; sender: string },
  ): Promise<Message> {
    return this.messagesService.create(messageData.content, messageData.sender);
  }

  @Get()
  findAll(): Promise<Message[]> {
    return this.messagesService.findAll();
  }
}
