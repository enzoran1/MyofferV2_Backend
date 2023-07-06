import { Test, TestingModule } from '@nestjs/testing';
import { SecteursActiviteController } from './secteurs_activite.controller';
import { SecteursActiviteService } from './secteurs_activite.service';

describe('SecteursActiviteController', () => {
  let controller: SecteursActiviteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecteursActiviteController],
      providers: [SecteursActiviteService],
    }).compile();

    controller = module.get<SecteursActiviteController>(SecteursActiviteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
