import { Test, TestingModule } from '@nestjs/testing';
import { SecteursActiviteService } from './secteurs_activite.service';

describe('SecteursActiviteService', () => {
  let service: SecteursActiviteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecteursActiviteService],
    }).compile();

    service = module.get<SecteursActiviteService>(SecteursActiviteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
