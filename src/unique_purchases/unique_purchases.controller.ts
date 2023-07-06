import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUniquePurchaseDto } from './dto/create-unique_purchase.dto';
import { UniquePurchasesService } from './unique_purchases.service';

@Controller('unique-purchases')
export class UniquePurchasesController {
  constructor(private readonly uniquePurchasesService: UniquePurchasesService) {}

  @Post()
  create(@Body() createUniquePurchaseDto: CreateUniquePurchaseDto) {
    return this.uniquePurchasesService.create(createUniquePurchaseDto);
  }

  @Get()
  findAll() {
    return this.uniquePurchasesService.findAll();
  }
}
