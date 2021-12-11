import { Controller, Body, Get, Post } from '@nestjs/common';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Get()
  findAllParticipants() {
    return this.surveyService.showAllAnswer();
  }

  @Post('/add')
  async addParticipants(@Body() payload) {
    return await this.surveyService.addSurveyAnswer(payload);
  }

  @Get('/result')
  async showAllResult() {
    return await this.surveyService.showAllResult();
  }
}
