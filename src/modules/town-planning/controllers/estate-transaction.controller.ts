import { Controller, Get, Query } from '@nestjs/common';
import { EstateTransactionQueryDto } from '../domain/dto/estate-transaction.dto';
import { GetEstateTransactionUseCase } from '../use-cases/get-estate-transaction.use-case';
import { EstateTransactionResponse } from '../domain/types/estate-transaction.type';

@Controller('api/v1/townPlanning/estateTransaction') // URLパスを定義
export class EstateTransactionController {
  // ユースケースを注入
  constructor(
    private readonly getEstateTransactionUseCase: GetEstateTransactionUseCase
  ) {}

  @Get('bar') // GETリクエストのエンドポイントを定義
  async getEstateTransactions(
    @Query() query: EstateTransactionQueryDto
  ): Promise<EstateTransactionResponse> {
    // クエリパラメーターを受け取り、ユースケースを実行
    return this.getEstateTransactionUseCase.execute(
      query.year,
      query.prefectureCode,
      query.type
    );
  }
}
