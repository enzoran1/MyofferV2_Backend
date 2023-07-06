import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { Option } from '../../options/entities/option.entity';

@Entity()
export class SecteurActivite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'category_id' })
  categoryId: number;

  @ManyToOne(() => Category, category => category.secteursActivite)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Option, option => option.secteurActivite)
  options: Option[];
}
