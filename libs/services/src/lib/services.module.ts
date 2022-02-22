import {Module} from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";
import {HistoryService} from "./services/history.service";

@Module({
  imports: [HttpModule],
  providers: [HistoryService],
  exports: [HistoryService],
})
export class ServicesModule {
}
