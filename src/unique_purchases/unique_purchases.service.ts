import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UniquePurchase } from './entities/unique_purchase.entity';
import { CreateUniquePurchaseDto } from './dto/create-unique_purchase.dto';

@Injectable()
export class UniquePurchasesService {
  constructor(
    @InjectRepository(UniquePurchase)
    private uniquePurchasesRepository: Repository<UniquePurchase>,
  ) {}

  create(createUniquePurchaseDto: CreateUniquePurchaseDto) {
    const uniquePurchase = this.uniquePurchasesRepository.create(createUniquePurchaseDto);
    return this.uniquePurchasesRepository.save(uniquePurchase);
  }

  findAll() {
    return this.uniquePurchasesRepository.find();
  }
}
