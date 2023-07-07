import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobboardService } from './jobboard.service';
import { CreateJobboardDto } from './dto/create-jobboard.dto';
import { UpdateJobboardDto } from './dto/update-jobboard.dto';

@Controller('jobboard')
export class JobboardController {
  constructor(private readonly jobboardService: JobboardService) {}

  @Post()
  create(@Body() createJobboardDto: CreateJobboardDto) {
    return this.jobboardService.create(createJobboardDto);
  }

  @Get()
  findAll() {
    return this.jobboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobboardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobboardDto: UpdateJobboardDto) {
    return this.jobboardService.update(+id, updateJobboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobboardService.remove(+id);
  }
}
