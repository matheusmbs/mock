import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampanhasModule } from './campanhas/campanhas.module';
import { MidiasModule } from './midias/midias.module';

@Module({
  imports: [CampanhasModule, MidiasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
