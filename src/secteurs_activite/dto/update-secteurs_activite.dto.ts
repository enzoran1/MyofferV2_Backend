import { PartialType } from '@nestjs/mapped-types';
import { CreateSecteurActiviteDto } from './create-secteurs_activite.dto';

export class UpdateSecteursActiviteDto extends PartialType(CreateSecteurActiviteDto) {}
