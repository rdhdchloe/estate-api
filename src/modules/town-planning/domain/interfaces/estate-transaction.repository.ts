import { EstateTransaction } from '../types/estate-transaction.type';

export interface IEstateTransactionRepository {
  // 条件に基づいてデータを検索するメソッドを定義
  findByConditions(
    year: number,
    prefectureCode: number,
    type: number
  ): Promise<EstateTransaction[]>;
}

// 依存性注入
export const ESTATE_TRANSACTION_REPOSITORY = 'ESTATE_TRANSACTION_REPOSITORY';
