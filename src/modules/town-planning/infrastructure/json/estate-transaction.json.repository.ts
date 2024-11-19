import { Injectable } from '@nestjs/common';
import { IEstateTransactionRepository } from '../../domain/interfaces/estate-transaction.repository';
import * as estateTransactions from '../../../../assets/estate_transactions.json';
import { EstateTransaction } from '../../domain/types/estate-transaction.type';

@Injectable()
export class EstateTransactionJsonRepository
  implements IEstateTransactionRepository
{
  async findByConditions(
    year: number,
    prefectureCode: number,
    type: number
  ): Promise<EstateTransaction[]> {
    const typedTransaction = estateTransactions as EstateTransaction[];
    // JSONファイルからデータをフィルタリングする
    return typedTransaction.filter(
      (transaction) =>
        Number(transaction.year) === Number(year) &&
        Number(transaction.prefectureCode) === Number(prefectureCode) &&
        Number(transaction.type) === Number(type)
    );
  }
}
