import { Module } from '@nestjs/common';
import { CompanyService } from './companies.service';
import { CompanyController } from './companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompaniesModule {}
