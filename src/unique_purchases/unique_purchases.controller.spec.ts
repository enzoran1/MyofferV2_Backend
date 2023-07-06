import { Test, TestingModule } from '@nestjs/testing';
import { UniquePurchasesController } from './unique_purchases.controller';
import { UniquePurchasesService } from './unique_purchases.service';

describe('UniquePurchasesController', () => {
  let controller: UniquePurchasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniquePurchasesController],
      providers: [UniquePurchasesService],
    }).compile();

    controller = module.get<UniquePurchasesController>(UniquePurchasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
