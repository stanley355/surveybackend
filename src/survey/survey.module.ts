import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantModule } from 'src/participant/participant.module';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { SurveyAnswer } from './survey.entity';
@Module({
  imports: [TypeOrmModule.forFeature([SurveyAnswer]), ParticipantModule],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
