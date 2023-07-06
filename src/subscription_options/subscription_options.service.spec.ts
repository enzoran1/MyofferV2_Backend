import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionOptionsService } from './subscription_options.service';

describe('SubscriptionOptionsService', () => {
  let service: SubscriptionOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionOptionsService],
    }).compile();

    service = module.get<SubscriptionOptionsService>(SubscriptionOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
