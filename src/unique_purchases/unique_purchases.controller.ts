import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UniquePurchasesService } from './unique_purchases.service';
import { CreateUniquePurchaseDto } from './dto/create-unique_purchase.dto';
import { UpdateUniquePurchaseDto } from './dto/update-unique_purchase.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uniquePurchasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUniquePurchaseDto: UpdateUniquePurchaseDto) {
    return this.uniquePurchasesService.update(+id, updateUniquePurchaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uniquePurchasesService.remove(+id);
  }
}
