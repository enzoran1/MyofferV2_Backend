import { Controller, Get, Param } from '@nestjs/common';
import { SubscriptionOptionService } from './subscription_options.service';

@Controller('subscription-options')
export class SubscriptionOptionController {
  constructor(private readonly subscriptionOptionService: SubscriptionOptionService) {}

  @Get(':id')
  getSubscriptionOptionById(@Param('id') id: string) {
    return this.subscriptionOptionService.getSubscriptionOptionById(id);
  }
}
