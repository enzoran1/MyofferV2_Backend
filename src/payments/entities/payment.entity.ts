import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  amount: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  payment_date: Date;

  @ManyToOne(() => User, user => user.payments)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
