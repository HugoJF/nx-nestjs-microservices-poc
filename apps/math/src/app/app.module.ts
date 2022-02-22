import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {HttpModule} from "@nestjs/axios";
import {ServicesModule} from "@nx-nestjs-microservices-poc/services";

@Module({
  imports: [HttpModule, ServicesModule],
  controllers: [AppController],
})
export class AppModule {
}
