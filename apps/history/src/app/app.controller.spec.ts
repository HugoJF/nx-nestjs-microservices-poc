import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { HistoryService } from './history.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [HistoryService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to history!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to history!',
      });
    });
  });
});
