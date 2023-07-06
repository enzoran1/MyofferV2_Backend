import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  region: string;

  @Column({ nullable: true })
  commune: string;

  @Column()
  budget: number;

  @Column()
  desired_date: Date;

  @Column()
  num_quotes_wanted: number;

  @Column({ default: false })
  validated: boolean;

  @Column({ default: false })
  closed: boolean;

  @Column({ nullable: true })
  attachment1: string;

  @Column({ nullable: true })
  attachment2: string;

  @Column({ nullable: true })
  attachment3: string;

  @ManyToOne(() => User, user => user.quotes)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
