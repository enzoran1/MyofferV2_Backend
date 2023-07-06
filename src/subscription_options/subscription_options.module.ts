import { Module } from '@nestjs/common';
import { SubscriptionOptionService } from './subscription_options.service';
import { SubscriptionOptionController } from './subscription_options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionOption } from './entities/subscription_option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ SubscriptionOption ])],
  controllers: [SubscriptionOptionController],
  providers: [SubscriptionOptionService]
})
export class SubscriptionOptionsModule {}
