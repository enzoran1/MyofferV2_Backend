import { Injectable } from '@nestjs/common';
import { CreateJobboardContactDto } from './dto/create-jobboard_contact.dto';
import { UpdateJobboardContactDto } from './dto/update-jobboard_contact.dto';

@Injectable()
export class JobboardContactsService {
  create(createJobboardContactDto: CreateJobboardContactDto) {
    return 'This action adds a new jobboardContact';
  }

  findAll() {
    return `This action returns all jobboardContacts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobboardContact`;
  }

  update(id: number, updateJobboardContactDto: UpdateJobboardContactDto) {
    return `This action updates a #${id} jobboardContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobboardContact`;
  }
}
