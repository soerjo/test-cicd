import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

export interface controllerInterface {
  status: number;
  message: string;
  data?: object;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): controllerInterface {
    const message = this.appService.getHello();

    return {
      status: 0,
      message: message,
    };
  }

  @Get('other')
  getOther(): controllerInterface {
    const message = this.appService.getOther();

    const data = this.appService.getData();

    return {
      status: 0,
      message: message,
      data: data,
    };
  }

  @Get('main')
  getMain(): controllerInterface {
    return {
      status: 0,
      message: 'success',
      data: {},
    };
  }
}
