import { Test, TestingModule } from '@nestjs/testing';
import { ParticularsController } from './particulars.controller';
import { ParticularsService } from './particulars.service';

describe('ParticularsController', () => {
  let controller: ParticularsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticularsController],
      providers: [ParticularsService],
    }).compile();

    controller = module.get<ParticularsController>(ParticularsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
