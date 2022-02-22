import { Test } from '@nestjs/testing';

import { HistoryService } from './history.service';

describe('HistoryService', () => {
  let service: HistoryService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [HistoryService],
    }).compile();

    service = app.get<HistoryService>(HistoryService);
  });

  describe('getData', () => {
    it('should return "Welcome to history!"', () => {
      // expect(service.getData()).toEqual({ message: 'Welcome to history!' });
    });
  });
});
