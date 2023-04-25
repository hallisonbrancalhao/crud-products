import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return { message: 'Hello API' };
  }

  getData(): { message: string } {
    return { message: 'Api backend' };
  }
}
