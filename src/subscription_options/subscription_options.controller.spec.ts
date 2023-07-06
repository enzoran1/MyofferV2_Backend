import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionOptionsController } from './subscription_options.controller';
import { SubscriptionOptionsService } from './subscription_options.service';

describe('SubscriptionOptionsController', () => {
  let controller: SubscriptionOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionOptionsController],
      providers: [SubscriptionOptionsService],
    }).compile();

    controller = module.get<SubscriptionOptionsController>(SubscriptionOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
