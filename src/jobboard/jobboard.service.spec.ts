import { Test, TestingModule } from '@nestjs/testing';
import { JobboardService } from './jobboard.service';

describe('JobboardService', () => {
  let service: JobboardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobboardService],
    }).compile();

    service = module.get<JobboardService>(JobboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
