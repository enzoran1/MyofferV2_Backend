import { PartialType } from '@nestjs/mapped-types';
import { CreateSecteursActiviteDto } from './create-secteurs_activite.dto';

export class UpdateSecteursActiviteDto extends PartialType(CreateSecteursActiviteDto) {}
