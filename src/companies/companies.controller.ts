import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CompanyService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.createCompany(createCompanyDto);
  }

  @Get()
  getAllCompanies() {
    return this.companyService.getAllCompanies();
  }

  @Get(':id')
  getCompanyById(@Param('id') id: string) {
    return this.companyService.getCompanyById(id);
  }

  @Patch(':id')
  updateCompany(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.updateCompany(id, updateCompanyDto);
  }

  @Delete(':id')
  deleteCompany(@Param('id') id: string) {
    return this.companyService.deleteCompany(id);
  }
}
