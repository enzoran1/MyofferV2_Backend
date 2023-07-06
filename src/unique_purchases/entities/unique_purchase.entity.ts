import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class UniquePurchase {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.uniquePurchases)
  user: User;

  @Column()
  service_name: string;

  @Column()
  service_price: number;

  @CreateDateColumn()
  purchase_date: Date;
}
