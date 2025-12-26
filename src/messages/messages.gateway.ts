import {
  MessageBody,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessagesService } from './messages.service';

export class MessagesGateway {
  @WebSocketServer()
  server: Server;

  constructor(private messagesService: MessagesService) {}

  @SubscribeMessage('sendMessage')
  async handleMessage(
    @MessageBody() data: { content: string; sender: string },
  ) {
    const message = await this.messagesService.create(
      data.content,
      data.sender,
    );
    this.server.emit('newMessage', message);
    return message;
  }
}
