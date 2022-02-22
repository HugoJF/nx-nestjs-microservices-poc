import {Controller, Get, Param} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {firstValueFrom} from "rxjs";
import {HistoryService} from "@nx-nestjs-microservices-poc/services";

@Controller()
export class AppController {
  constructor(
    private readonly http: HttpService,
    private readonly internalService: HistoryService,
  ) {
  }

  @Get('sum/:a/:b')
  async sum(@Param('a') a: string, @Param('b') b: string) {
    const result = parseInt(a) + parseInt(b);

    await firstValueFrom(this.internalService.post(a, b, result));

    const history = await firstValueFrom(this.internalService.get());

    return {result, history};
  }
}
