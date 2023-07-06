import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { QuoteService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';

@Controller('quotes')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Post()
  createQuote(@Body() createQuoteDto: CreateQuoteDto) {
    return this.quoteService.createQuote(createQuoteDto);
  }

  @Get()
  getAllQuotes() {
    return this.quoteService.getAllQuotes();
  }

  @Get(':id')
  getQuoteById(@Param('id') id: string) {
    return this.quoteService.getQuoteById(id);
  }

  @Patch(':id')
  updateQuote(@Param('id') id: string, @Body() updateQuoteDto: UpdateQuoteDto) {
    return this.quoteService.updateQuote(id, updateQuoteDto);
  }

  @Delete(':id')
  deleteQuote(@Param('id') id: string) {
    return this.quoteService.deleteQuote(id);
  }
}
