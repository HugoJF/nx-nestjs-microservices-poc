import {Injectable} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {map} from "rxjs";

const baseUrl = process.env.HISTORY_SERVICE_URL;

console.log({baseUrl})

@Injectable()
export class HistoryService {
  constructor(
    private readonly http: HttpService,
  ) {
  }

  post(a: string, b: string, result: number) {
    return this.http.post(`${baseUrl}/${a}/${b}/${result}`)
  }

  get() {
    return this.http.get(`${baseUrl}/`).pipe(map(({data}) => data))
  }
}
