import { Injectable } from '@nestjs/common';
import { CreateSecteursActiviteDto } from './dto/create-secteurs_activite.dto';
import { UpdateSecteursActiviteDto } from './dto/update-secteurs_activite.dto';

@Injectable()
export class SecteursActiviteService {
  create(createSecteursActiviteDto: CreateSecteursActiviteDto) {
    return 'This action adds a new secteursActivite';
  }

  findAll() {
    return `This action returns all secteursActivite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} secteursActivite`;
  }

  update(id: number, updateSecteursActiviteDto: UpdateSecteursActiviteDto) {
    return `This action updates a #${id} secteursActivite`;
  }

  remove(id: number) {
    return `This action removes a #${id} secteursActivite`;
  }
}
