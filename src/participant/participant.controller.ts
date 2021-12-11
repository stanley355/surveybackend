import { Controller, Body, Get, Post} from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantDTO } from './participant.dto';

@Controller('participant')
export class ParticipantController {
    constructor(private readonly participantService: ParticipantService) {}

    @Get()
    findAllParticipants() {
        return this.participantService.showAllParticipants();
    }

    @Post('/add')
    async addParticipants(@Body() participant: ParticipantDTO) {
        return await this.participantService.addParticipant(participant);
    }
}
