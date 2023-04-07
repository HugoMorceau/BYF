import { Module } from '@nestjs/common';
import { CelebritiesService } from './celebrities.service';
import { CelebritiesResolver } from './celebrities.resolver';

@Module({
  providers: [CelebritiesResolver, CelebritiesService],
})
export class CelebritiesModule {}
