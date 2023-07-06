import { Test, TestingModule } from '@nestjs/testing';
import { JobboardContactsService } from './jobboard_contacts.service';

describe('JobboardContactsService', () => {
  let service: JobboardContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobboardContactsService],
    }).compile();

    service = module.get<JobboardContactsService>(JobboardContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
