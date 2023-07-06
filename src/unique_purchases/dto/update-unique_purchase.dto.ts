import { PartialType } from '@nestjs/mapped-types';
import { CreateUniquePurchaseDto } from './create-unique_purchase.dto';

export class UpdateUniquePurchaseDto extends PartialType(CreateUniquePurchaseDto) {
    
}
