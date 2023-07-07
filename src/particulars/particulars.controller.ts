import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticularsService } from './particulars.service';
import { CreateParticularDto } from './dto/create-particular.dto';
import { UpdateParticularDto } from './dto/update-particular.dto';

@Controller('particulars')
export class ParticularsController {
  constructor(private readonly particularsService: ParticularsService) {}

  @Post()
  create(@Body() createParticularDto: CreateParticularDto) {
    return this.particularsService.create(createParticularDto);
  }

  @Get()
  findAll() {
    return this.particularsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.particularsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParticularDto: UpdateParticularDto) {
    return this.particularsService.update(+id, updateParticularDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.particularsService.remove(+id);
  }
}
