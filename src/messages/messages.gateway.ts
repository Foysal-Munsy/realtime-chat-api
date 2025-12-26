import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

export class MessagesGateway {
  @WebSocketServer()
  server: Server;
}
