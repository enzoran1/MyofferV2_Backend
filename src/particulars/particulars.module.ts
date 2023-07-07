import { Module } from '@nestjs/common';
import { ParticularsService } from './particulars.service';
import { ParticularsController } from './particulars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Particular } from './entities/particular.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Particular])],
  controllers: [ParticularsController],
  providers: [ParticularsService]
})
export class ParticularsModule {}
