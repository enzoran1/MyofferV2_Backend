import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { JobboardService } from './jobboard.service';
import { CreateJobboardDto } from './dto/create-jobboard.dto';
import { UpdateJobboardDto } from './dto/update-jobboard.dto';

@Controller('jobboards')
export class JobboardController {
  constructor(private readonly jobboardService: JobboardService) {}

  @Post()
  createJobboard(@Body() createJobboardDto: CreateJobboardDto) {
    return this.jobboardService.createJobboard(createJobboardDto);
  }

  @Get()
  getAllJobboards() {
    return this.jobboardService.getAllJobboards();
  }

  @Get(':id')
  getJobboardById(@Param('id') id: string) {
    return this.jobboardService.getJobboardById(id);
  }

  @Patch(':id')
  updateJobboard(@Param('id') id: string, @Body() updateJobboardDto: UpdateJobboardDto) {
    return this.jobboardService.updateJobboard(id, updateJobboardDto);
  }

  @Delete(':id')
  deleteJobboard(@Param('id') id: string) {
    return this.jobboardService.deleteJobboard(id);
  }
}
