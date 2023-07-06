import { Module } from '@nestjs/common';
import { JobboardService } from './jobboard.service';
import { JobboardController } from './jobboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jobboard } from './entities/jobboard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jobboard])],
  controllers: [JobboardController],
  providers: [JobboardService]
})
export class JobboardModule {}
