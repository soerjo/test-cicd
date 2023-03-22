import { Injectable } from '@nestjs/common';

export interface DataInterface {
  name: string;
  age: number;
  status: 'bujank' | 'lajank';
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getOther(): string {
    return 'Other World!';
  }

  getData(): DataInterface {
    return {
      name: 'soerjo',
      age: 26,
      status: 'bujank',
    };
  }
}
