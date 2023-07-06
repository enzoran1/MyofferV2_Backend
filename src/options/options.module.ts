import { Module } from '@nestjs/common';
import { OptionService } from './options.service';
import { OptionController } from './options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from './entities/option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ Option ])],
  controllers: [OptionController],
  providers: [OptionService]
})
export class OptionsModule {}
