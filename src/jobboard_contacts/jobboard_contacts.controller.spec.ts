import { Test, TestingModule } from '@nestjs/testing';
import { JobboardContactsController } from './jobboard_contacts.controller';
import { JobboardContactsService } from './jobboard_contacts.service';

describe('JobboardContactsController', () => {
  let controller: JobboardContactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobboardContactsController],
      providers: [JobboardContactsService],
    }).compile();

    controller = module.get<JobboardContactsController>(JobboardContactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
