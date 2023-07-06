import { Controller, Get, Param } from '@nestjs/common';
import { JobboardContactService } from './jobboard_contacts.service';

@Controller('jobboard-contacts')
export class JobboardContactController {
  constructor(private readonly jobboardContactService: JobboardContactService) {}

  @Get(':id')
  getJobboardContactById(@Param('id') id: string) {
    return this.jobboardContactService.getJobboardContactById(id);
  }
}
