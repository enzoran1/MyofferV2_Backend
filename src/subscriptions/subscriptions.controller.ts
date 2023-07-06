import { Controller, Get, Param } from '@nestjs/common';
import { SubscriptionService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get(':id')
  getSubscriptionById(@Param('id') id: string) {
    return this.subscriptionService.getSubscriptionById(id);
  }
}
