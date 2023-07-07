import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubscriptionOptionsService } from './subscription_options.service';
import { CreateSubscriptionOptionDto } from './dto/create-subscription_option.dto';
import { UpdateSubscriptionOptionDto } from './dto/update-subscription_option.dto';

@Controller('subscription-options')
export class SubscriptionOptionsController {
  constructor(private readonly subscriptionOptionsService: SubscriptionOptionsService) {}

  @Post()
  create(@Body() createSubscriptionOptionDto: CreateSubscriptionOptionDto) {
    return this.subscriptionOptionsService.create(createSubscriptionOptionDto);
  }

  @Get()
  findAll() {
    return this.subscriptionOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriptionOptionDto: UpdateSubscriptionOptionDto) {
    return this.subscriptionOptionsService.update(+id, updateSubscriptionOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionOptionsService.remove(+id);
  }
}
