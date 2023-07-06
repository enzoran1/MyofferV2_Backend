import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SubscriptionOption } from '../../subscription_options/entities/subscription_option.entity';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ name: 'max_options' })
  maxOptions: number;

  @OneToMany(() => SubscriptionOption, subscriptionOption => subscriptionOption.subscription)
  subscriptionOptions: SubscriptionOption[];
}
