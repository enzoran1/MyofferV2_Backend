import { Controller, Get, Param } from '@nestjs/common';
import { PaymentService } from './payments.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get(':id')
  getPaymentById(@Param('id') id: string) {
    return this.paymentService.getPaymentById(id);
  }
}
