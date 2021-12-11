import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';

import { Participant } from './participant.entity';

interface participantInterface {
  full_name: string;
  email: string;
  phone_number: string;
}

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
  ) {}

  showAllParticipants() {
    return this.participantRepository.find();
  }

  async addParticipant(payload: participantInterface) {
    const check = await this.participantRepository.findOne({
      full_name: payload.full_name,
    });

    if (check) {
      return { full_name: null, success: false, error: 'User exist' };
    } else {
      const create = await this.participantRepository.create(payload);
      const save = await this.participantRepository.save(create);

      if (save)
        return { full_name: payload.full_name, success: true, error: null };
    }
  }
}
