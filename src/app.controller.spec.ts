import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toEqual({
        status: expect.any(Number),
        message: expect.any(String),
      });
    });
  });

  describe('/other', () => {
    it('should return "Other World!"', () => {
      expect(appController.getOther().status).toEqual(expect.any(Number));
      expect(appController.getOther().message).toEqual(expect.any(String));
      expect(appController.getOther().data).toEqual(expect.any(Object));
    });
  });

  describe('/main', () => {
    it('should return "Other World!"', () => {
      expect(appController.getMain().status).toEqual(expect.any(Number));
      expect(appController.getMain().message).toEqual(expect.any(String));
      expect(appController.getMain().data).toEqual(expect.any(Object));
    });
  });
});
