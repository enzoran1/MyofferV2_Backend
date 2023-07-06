import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Subscription } from '../../subscriptions/entities/subscription.entity';
import { Particular } from '../../particulars/entities/particular.entity';
import { Company } from '../../companies/entities/company.entity';
import { Quote } from '../../quotes/entities/quote.entity';
import { Jobboard } from '../../jobboard/entities/jobboard.entity';
import { Notification } from '../../notifications/entities/notification.entity';
import { Payment } from '../../payments/entities/payment.entity';
import { UniquePurchase } from '../../unique_purchases/entities/unique_purchase.entity';
import { JobboardContact } from '../../jobboard_contacts/entities/jobboard_contact.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  user_type: string;

  @Column({ nullable: true })
  subscription_id: number;

  @ManyToOne(() => Subscription)
  @JoinColumn({ name: 'subscription_id' })
  subscription: Subscription;

  @OneToOne(() => Particular, particular => particular.user)
  particular: Particular;

  @OneToOne(() => Company, company => company.user)
  company: Company[];

  @OneToMany(() => Quote, quote => quote.user)
  quotes: Quote[];

  @OneToMany(() => Jobboard, jobboard => jobboard.user)
  jobboards: Jobboard[];

  @OneToMany(() => JobboardContact, jobboardContact => jobboardContact.user)
  jobboardContacts: JobboardContact[];

  @OneToMany(() => Notification, notification => notification.user)
  notifications: Notification[];

  @OneToMany(() => Payment, payment => payment.user)
  payments: Payment[];

  @OneToMany(() => UniquePurchase, uniquePurchase => uniquePurchase.user)
  uniquePurchases: UniquePurchase[];
}
