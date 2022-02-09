import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  async findAll(@Res() res) {
    const transactions = await this.transactionsService.findAll();

    return !transactions
      ? res.status(HttpStatus.NO_CONTENT).json(null)
      : res.json(transactions);
  }
}
