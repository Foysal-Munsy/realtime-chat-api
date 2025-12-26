import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message) private messagesRepository: Repository<Message>,
  ) {}
  async create(content: string, sender: string): Promise<Message> {
    const message = new Message();
    message.content = content;
    message.sender = sender;
    return await this.messagesRepository.save(message);
  }
}
