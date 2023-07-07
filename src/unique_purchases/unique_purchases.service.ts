import { Injectable } from '@nestjs/common';
import { CreateUniquePurchaseDto } from './dto/create-unique_purchase.dto';
import { UpdateUniquePurchaseDto } from './dto/update-unique_purchase.dto';

@Injectable()
export class UniquePurchasesService {
  create(createUniquePurchaseDto: CreateUniquePurchaseDto) {
    return 'This action adds a new uniquePurchase';
  }

  findAll() {
    return `This action returns all uniquePurchases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uniquePurchase`;
  }

  update(id: number, updateUniquePurchaseDto: UpdateUniquePurchaseDto) {
    return `This action updates a #${id} uniquePurchase`;
  }

  remove(id: number) {
    return `This action removes a #${id} uniquePurchase`;
  }
}
