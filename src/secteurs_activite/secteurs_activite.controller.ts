import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SecteursActiviteService } from './secteurs_activite.service';
import { CreateSecteurActiviteDto } from './dto/create-secteurs_activite.dto';
import { UpdateSecteursActiviteDto } from './dto/update-secteurs_activite.dto';

@Controller('secteurs-activite')
export class SecteursActiviteController {
  constructor(private readonly secteursActiviteService: SecteursActiviteService) {}

  @Get()
  findAll() {
    return this.secteursActiviteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secteursActiviteService.findOne(id);
  }

  @Post()
  create(@Body() createSecteurActiviteDto: CreateSecteurActiviteDto) {
    return this.secteursActiviteService.create(createSecteurActiviteDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSecteurActiviteDto: UpdateSecteursActiviteDto) {
    return this.secteursActiviteService.update(id, updateSecteurActiviteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secteursActiviteService.remove(id);
  }
}
