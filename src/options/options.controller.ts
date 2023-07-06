import { Controller, Get, Param } from '@nestjs/common';
import { OptionService } from './options.service';

@Controller('options')
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @Get(':id')
  getOptionById(@Param('id') id: string) {
    return this.optionService.getOptionById(id);
  }
}
