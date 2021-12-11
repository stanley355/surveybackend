import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
export class SurveyAnswer {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar', length: 255, default: '' })
  full_name: string;

  @Column({ type: 'varchar', length: 255, default: '' })
  answer_1: string;

  @Column({ type: 'varchar', length: 255, default: '' })
  answer_2: string;

  @Column({ type: 'varchar', length: 255, default: '' })
  answer_3: string;
}
