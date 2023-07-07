import { Injectable } from '@nestjs/common';
import { CreateSubscriptionOptionDto } from './dto/create-subscription_option.dto';
import { UpdateSubscriptionOptionDto } from './dto/update-subscription_option.dto';

@Injectable()
export class SubscriptionOptionsService {
  create(createSubscriptionOptionDto: CreateSubscriptionOptionDto) {
    return 'This action adds a new subscriptionOption';
  }

  findAll() {
    return `This action returns all subscriptionOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriptionOption`;
  }

  update(id: number, updateSubscriptionOptionDto: UpdateSubscriptionOptionDto) {
    return `This action updates a #${id} subscriptionOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriptionOption`;
  }
}
