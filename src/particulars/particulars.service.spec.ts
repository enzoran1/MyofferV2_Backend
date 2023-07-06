import { Test, TestingModule } from '@nestjs/testing';
import { ParticularsService } from './particulars.service';

describe('ParticularsService', () => {
  let service: ParticularsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticularsService],
    }).compile();

    service = module.get<ParticularsService>(ParticularsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
