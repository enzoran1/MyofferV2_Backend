import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionOptionDto } from './create-subscription_option.dto';

export class UpdateSubscriptionOptionDto extends PartialType(CreateSubscriptionOptionDto) {}
