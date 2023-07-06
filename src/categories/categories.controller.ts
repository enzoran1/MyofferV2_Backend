import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './categories.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return this.categoryService.getCategoryById(id);
  }
}
