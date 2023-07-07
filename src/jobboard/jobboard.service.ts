import { Injectable } from '@nestjs/common';
import { CreateJobboardDto } from './dto/create-jobboard.dto';
import { UpdateJobboardDto } from './dto/update-jobboard.dto';

@Injectable()
export class JobboardService {
  create(createJobboardDto: CreateJobboardDto) {
    return 'This action adds a new jobboard';
  }

  findAll() {
    return `This action returns all jobboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobboard`;
  }

  update(id: number, updateJobboardDto: UpdateJobboardDto) {
    return `This action updates a #${id} jobboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobboard`;
  }
}
