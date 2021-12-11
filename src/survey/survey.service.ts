import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Participant } from 'src/participant/participant.entity';
import { SurveyAnswer } from './survey.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(SurveyAnswer)
    private surveyAnswerRepo: Repository<SurveyAnswer>,
  ) {}

  showAllAnswer() {
    return this.surveyAnswerRepo.find();
  }

  async addSurveyAnswer(payload) {
    const { full_name, data }= payload;

    const fullData = {
      full_name: full_name,
      answer_1: data.answer_1,
      answer_2: data.answer_2,
      answer_3: data.answer_3,
    }

    const create = await this.surveyAnswerRepo.create(fullData);    
    const save = await this.surveyAnswerRepo.save(create);

    if (save) return { success: true, error: null };
  }

  async showAllResult () {
    const all = await this.surveyAnswerRepo.find();

    const filterNo1A = all.filter((one)=> one.answer_1 === "a. 100 kilogram gajah");
    const filterNo1B = all.filter((one)=> one.answer_1 === "b. 100 kilogram kapas");

    const filterNo2A = all.filter((one)=> one.answer_2 === "a. Manis");
    const filterNo2B = all.filter((one)=> one.answer_2 === "b. Asam");
    const filterNo2C = all.filter((one)=> one.answer_2 === "c. Asin");

    const filterNo3A = all.filter((one)=> one.answer_3 === "a. 100 kilogram gajah");
    const filterNo3B = all.filter((one)=> one.answer_3 === "b. 100 kilogram kapas");

    const data = {
      no1A : `${filterNo1A.length} / ${all.length}`,
      no1B : `${filterNo1B.length} / ${all.length}`,
      no2A : `${filterNo2A.length} / ${all.length}`,
      no2B : `${filterNo2B.length} / ${all.length}`,
      no2C : `${filterNo2C.length} / ${all.length}`,
      no3A : `${filterNo3A.length} / ${all.length}`,
      no3B : `${filterNo3B.length} / ${all.length}`,
      allResult: all
    }

    return { success: true, error: null, data: data};
  }
}
