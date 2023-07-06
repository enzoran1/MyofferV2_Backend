import { PartialType } from '@nestjs/mapped-types';
import { CreateJobboardContactDto } from './create-jobboard_contact.dto';

export class UpdateJobboardContactDto extends PartialType(CreateJobboardContactDto) {
    

}
