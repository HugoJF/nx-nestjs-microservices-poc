import {Injectable} from '@nestjs/common';

type History = { a: string; b: string; result: string };

@Injectable()
export class AppService {
  private readonly history: History[] = [{
    a: '2',
    b: '4',
    result: '6',
  }];

  get() {
    return this.history;
  }

  add(a: string, b: string, result: string) {
    this.history.push({a, b, result});
  }
}
