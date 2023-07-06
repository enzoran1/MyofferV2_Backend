import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  company_name: string;

  @Column()
  registration_number: string;

  @Column()
  vat_number: string;

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

  @Column()
  legal_form: string;

  @Column({ nullable: true })
  region: string;

  @OneToOne(() => User, user => user.company)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
