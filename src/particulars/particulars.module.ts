import { Module } from '@nestjs/common';
import { ParticularService } from './particulars.service';
import { ParticularController } from './particulars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Particular } from './entities/particular.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Particular])],
  controllers: [ParticularController],
  providers: [ParticularService]
})
export class ParticularsModule {}
