import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { SurveyAnswer } from 'src/survey/survey.entity';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar', length: 255, default: '' })
  full_name: string;

  @Column({ type: 'varchar', length: 255, default: '' })
  email: string;

  @Column({ type: 'varchar', length: 255, default: '' })
  phone_number: string;

  @Column({ type: 'boolean', default: false })
  has_submitted: boolean;
}
