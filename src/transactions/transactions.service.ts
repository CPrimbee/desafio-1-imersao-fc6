import { Inject, Injectable, Query, Res } from '@nestjs/common';
import { Connection, getConnection, QueryBuilder } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  private connection: Connection;
  constructor() {
    this.connection = getConnection();
  }

  async create({ account_id, amount }: CreateTransactionDto) {
    await this.connection
      .createQueryBuilder()
      .insert()
      .into(Transaction)
      .values([{ account_id: account_id, amount: amount }])
      .execute();
    return await this.findAll();
  }

  async findAll() {
    const transactions = await this.connection
      .createQueryBuilder()
      .select('transaction')
      .from(Transaction, 'transaction')
      .getMany();
    return transactions.length ? transactions : null;
  }
}
