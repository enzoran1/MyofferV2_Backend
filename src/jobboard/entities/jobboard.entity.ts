import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { JobboardContact } from '../../jobboard_contacts/entities/jobboard_contact.entity';

@Entity()
export class Jobboard {
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

  @Column({ default: false })
  validated: boolean;

  @ManyToOne(() => User, user => user.jobboards)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => JobboardContact, jobboardContact => jobboardContact.jobboard)
  jobboardContacts: JobboardContact[];
}
