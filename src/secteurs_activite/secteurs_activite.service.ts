import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SecteurActivite } from './entities/secteurs_activite.entity';
import { CreateSecteurActiviteDto } from './dto/create-secteurs_activite.dto';
import { UpdateSecteursActiviteDto } from './dto/update-secteurs_activite.dto';

@Injectable()
export class SecteursActiviteService {
  constructor(
    @InjectRepository(SecteurActivite)
    private readonly secteurActiviteRepository: Repository<SecteurActivite>,
  ) {}

  findAll() {
    return this.secteurActiviteRepository.find();
  }

  findOne(id: string) {
    //return this.secteurActiviteRepository.findOne(id);
  }

  create(createSecteurActiviteDto: CreateSecteurActiviteDto) {
    const secteurActivite = this.secteurActiviteRepository.create(createSecteurActiviteDto);
    return this.secteurActiviteRepository.save(secteurActivite);
  }

  update(id: string, updateSecteurActiviteDto: UpdateSecteursActiviteDto) {
    return this.secteurActiviteRepository.update(id, updateSecteurActiviteDto);
  }

  remove(id: string) {
    return this.secteurActiviteRepository.delete(id);
  }
}
