import {Controller, Get, Param} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {firstValueFrom, map} from "rxjs";

@Controller()
export class AppController {
  constructor(private readonly http: HttpService) {
  }

  @Get('sum/:a/:b')
  async sum(@Param('a') a: string, @Param('b') b: string) {
    const result = parseInt(a) + parseInt(b);

    await firstValueFrom(
      this.http.post(`https://nx-nestjs-microservices-poc.sa-east-1.aws.hugo.dev.br/history/${a}/${b}/${result}`),
    );

    const history = await firstValueFrom(
      this.http
        .get(`https://nx-nestjs-microservices-poc.sa-east-1.aws.hugo.dev.br/history`)
        .pipe(map(({data}) => data)),
    );

    return {result, history};
  }
}
