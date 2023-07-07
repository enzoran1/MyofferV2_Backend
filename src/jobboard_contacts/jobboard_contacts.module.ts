import { Module } from '@nestjs/common';
import { JobboardContactsService } from './jobboard_contacts.service';
import { JobboardContactsController } from './jobboard_contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobboardContact } from './entities/jobboard_contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobboardContact])],
  controllers: [JobboardContactsController],
  providers: [JobboardContactsService]
})
export class JobboardContactsModule {}
