import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Desafio 1 - Imersão Fullcycle 6';
  }
}
