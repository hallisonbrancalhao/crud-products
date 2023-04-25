import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Api backend"', () => {
      expect(service.getData()).toEqual({ message: 'Api backend' });
    });
  });

  describe('getHello', () => {
    it('should return "Hello API"', () => {
      expect(service.getHello()).toEqual({ message: 'Hello API' });
    });
  });
});
