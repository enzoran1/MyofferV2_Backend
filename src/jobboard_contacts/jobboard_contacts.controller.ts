import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobboardContactsService } from './jobboard_contacts.service';
import { CreateJobboardContactDto } from './dto/create-jobboard_contact.dto';
import { UpdateJobboardContactDto } from './dto/update-jobboard_contact.dto';

@Controller('jobboard-contacts')
export class JobboardContactsController {
  constructor(private readonly jobboardContactsService: JobboardContactsService) {}

  @Post()
  create(@Body() createJobboardContactDto: CreateJobboardContactDto) {
    return this.jobboardContactsService.create(createJobboardContactDto);
  }

  @Get()
  findAll() {
    return this.jobboardContactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobboardContactsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobboardContactDto: UpdateJobboardContactDto) {
    return this.jobboardContactsService.update(+id, updateJobboardContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobboardContactsService.remove(+id);
  }
}
