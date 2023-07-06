import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Subscription } from '../../subscriptions/entities/subscription.entity';
import { Option } from '../../options/entities/option.entity';

@Entity()
export class SubscriptionOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'subscription_id' })
  subscriptionId: number;

  @Column({ name: 'option_id' })
  optionId: number;

  @ManyToOne(() => Subscription, subscription => subscription.subscriptionOptions)
  @JoinColumn({ name: 'subscription_id' })
  subscription: Subscription;

  @ManyToOne(() => Option, option => option.subscriptionOptions)
  @JoinColumn({ name: 'option_id' })
  option: Option;
}
