import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersModule } from 'src/offers/offers.module';

@Module({
  imports: [OffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
