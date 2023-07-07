import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SecteursActiviteService } from './secteurs_activite.service';
import { CreateSecteursActiviteDto } from './dto/create-secteurs_activite.dto';
import { UpdateSecteursActiviteDto } from './dto/update-secteurs_activite.dto';

@Controller('secteurs-activite')
export class SecteursActiviteController {
  constructor(private readonly secteursActiviteService: SecteursActiviteService) {}

  @Post()
  create(@Body() createSecteursActiviteDto: CreateSecteursActiviteDto) {
    return this.secteursActiviteService.create(createSecteursActiviteDto);
  }

  @Get()
  findAll() {
    return this.secteursActiviteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secteursActiviteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSecteursActiviteDto: UpdateSecteursActiviteDto) {
    return this.secteursActiviteService.update(+id, updateSecteursActiviteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secteursActiviteService.remove(+id);
  }
}
