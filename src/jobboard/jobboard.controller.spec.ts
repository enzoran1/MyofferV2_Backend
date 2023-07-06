import { Test, TestingModule } from '@nestjs/testing';
import { JobboardController } from './jobboard.controller';
import { JobboardService } from './jobboard.service';

describe('JobboardController', () => {
  let controller: JobboardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobboardController],
      providers: [JobboardService],
    }).compile();

    controller = module.get<JobboardController>(JobboardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
