import { Injectable, Inject } from '@nestjs/common';
import {
  ESTATE_TRANSACTION_REPOSITORY,
  IEstateTransactionRepository
} from '../domain/interfaces/estate-transaction.repository';
import { EstateTransactionResponse } from '../domain/types/estate-transaction.type';

@Injectable()
export class GetEstateTransactionUseCase {
  // リポジトリを注入（依存性注入）
  constructor(
    @Inject(ESTATE_TRANSACTION_REPOSITORY)
    private readonly repository: IEstateTransactionRepository
  ) {}

  async execute(
    year: number,
    prefectureCode: number,
    type: number
  ): Promise<EstateTransactionResponse> {
    // リポジトリからデータを取得する
    const transactions = await this.repository.findByConditions(
      year,
      prefectureCode,
      type
    );

    // 取得したデータをレスポンスに変換する
    return {
      status: 'success',
      data: transactions
    };
  }
}
