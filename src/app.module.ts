import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { ToipicsModule } from './toipics/toipics.module';
import { TopicsController } from './topics/topics.controller';

@Module({
  imports: [EpisodesModule, ToipicsModule],
  controllers: [AppController, TopicsController],
  providers: [AppService],
})
export class AppModule {}
