import { Test, TestingModule } from '@nestjs/testing';
import { UniquePurchasesService } from './unique_purchases.service';

describe('UniquePurchasesService', () => {
  let service: UniquePurchasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniquePurchasesService],
    }).compile();

    service = module.get<UniquePurchasesService>(UniquePurchasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
