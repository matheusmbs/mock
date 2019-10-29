import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampanhasModule } from './campanhas/campanhas.module';

@Module({
  imports: [CampanhasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
