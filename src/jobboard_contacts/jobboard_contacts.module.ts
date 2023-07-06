import { Module } from '@nestjs/common';
import { JobboardContactService } from './jobboard_contacts.service';
import { JobboardContactController } from './jobboard_contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobboardContact } from './entities/jobboard_contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobboardContact])],
  controllers: [JobboardContactController],
  providers: [JobboardContactService]
})
export class JobboardContactsModule {}
