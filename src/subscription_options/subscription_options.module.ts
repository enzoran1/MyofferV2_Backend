import { Module } from '@nestjs/common';
import { SubscriptionOptionsService } from './subscription_options.service';
import { SubscriptionOptionsController } from './subscription_options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionOption } from './entities/subscription_option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubscriptionOption])],
  controllers: [SubscriptionOptionsController],
  providers: [SubscriptionOptionsService]
})
export class SubscriptionOptionsModule {}
