import {Controller, Get, HttpCode, Param, Post} from '@nestjs/common';

import {HistoryService} from './history.service';

@Controller()
export class AppController {
  constructor(private readonly appService: HistoryService) {
  }

  @Post('/:a/:b/:result')
  @HttpCode(204)
  getHistory(
    @Param('a') a: string,
    @Param('b') b: string,
    @Param('result') result: string,
  ) {
    this.appService.add(a, b, result);
  }

  @Get('/')
  getHello() {
    return this.appService.get();
  }
}
