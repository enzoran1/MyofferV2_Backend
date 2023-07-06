import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Particular {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  gender: string;

  @Column()
  postal_code: string;

  @Column()
  commune: string;

  @Column()
  city: string;

  @Column()
  street_number: string;

  @Column({ nullable: true })
  address_complement: string;

  @Column({ nullable: true })
  region: string;

  @OneToOne(() => User, user => user.particular)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
