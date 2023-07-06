import { Module } from '@nestjs/common';
import { UniquePurchasesService } from './unique_purchases.service';
import { UniquePurchasesController } from './unique_purchases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniquePurchase } from './entities/unique_purchase.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UniquePurchase]),
    // Autres modules importés
  ],
  controllers: [UniquePurchasesController],
  providers: [UniquePurchasesService]
})
export class UniquePurchasesModule {}




