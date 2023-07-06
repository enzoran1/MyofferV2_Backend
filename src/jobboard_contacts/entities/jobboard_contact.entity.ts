import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Jobboard } from '../../jobboard/entities/jobboard.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class JobboardContact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobboard_id: number;

  @Column()
  user_id: number;

  @ManyToOne(() => Jobboard, jobboard => jobboard.jobboardContacts)
  @JoinColumn({ name: 'jobboard_id' })
  jobboard: Jobboard;

  @ManyToOne(() => User, user => user.jobboardContacts)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
