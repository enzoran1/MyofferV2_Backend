import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { SecteurActivite } from '../../secteurs_activite/entities/secteurs_activite.entity';
import { SubscriptionOption } from '../../subscription_options/entities/subscription_option.entity';

@Entity()
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  monthly_price: number;

  @Column({ name: 'secteur_activite_id' })
  secteurActiviteId: number;

  @ManyToOne(() => SecteurActivite, secteurActivite => secteurActivite.options)
  @JoinColumn({ name: 'secteur_activite_id' })
  secteurActivite: SecteurActivite;

  @ManyToOne(() => SubscriptionOption, subscriptionOption => subscriptionOption.option)
  subscriptionOptions: SubscriptionOption[];
}
