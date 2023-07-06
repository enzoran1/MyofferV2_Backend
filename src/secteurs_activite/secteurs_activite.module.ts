import { Module } from '@nestjs/common';
import { SecteursActiviteService } from './secteurs_activite.service';
import { SecteursActiviteController } from './secteurs_activite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecteurActivite } from './entities/secteurs_activite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SecteurActivite])],
  controllers: [SecteursActiviteController],
  providers: [SecteursActiviteService]
})
export class SecteursActiviteModule {}
