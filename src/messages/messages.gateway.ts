import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessagesService } from './messages.service';

export class MessagesGateway {
  @WebSocketServer()
  server: Server;
  constructor(private messagesService: MessagesService) {}
}
