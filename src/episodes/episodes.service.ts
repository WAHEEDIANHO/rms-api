import { Injectable } from '@nestjs/common';

@Injectable()
export class EpisodesService {
  async findAll() {
    return 'find all from provider';
  }
}
