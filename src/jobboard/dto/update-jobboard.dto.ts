import { PartialType } from '@nestjs/mapped-types';
import { CreateJobboardDto } from './create-jobboard.dto';

export class UpdateJobboardDto extends PartialType(CreateJobboardDto) {}
