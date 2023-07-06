import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ParticularService } from './particulars.service';
import { CreateParticularDto } from './dto/create-particular.dto';
import { UpdateParticularDto } from './dto/update-particular.dto';

@Controller('particulars')
export class ParticularController {
  constructor(private readonly particularService: ParticularService) {}

  @Post()
  createParticular(@Body() createParticularDto: CreateParticularDto) {
    return this.particularService.createParticular(createParticularDto);
  }

  @Get()
  getAllParticulars() {
    return this.particularService.getAllParticulars();
  }

  @Get(':id')
  getParticularById(@Param('id') id: string) {
    return this.particularService.getParticularById(id);
  }

  @Patch(':id')
  updateParticular(@Param('id') id: string, @Body() updateParticularDto: UpdateParticularDto) {
    return this.particularService.updateParticular(id, updateParticularDto);
  }

  @Delete(':id')
  deleteParticular(@Param('id') id: string) {
    return this.particularService.deleteParticular(id);
  }
}
