import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [ConfigModule],
  controllers: [EpisodesController],
  providers: [EpisodesService],
})
export class EpisodesModule {
  
  constructor(private configService: ConfigService) {}
  
  fromConfig() {
    this.configService.fincdConfig();   
  }
}
