import { Module } from '@nestjs/common';
import { EstateTransactionController } from './controllers/estate-transaction.controller';
import { GetEstateTransactionUseCase } from './use-cases/get-estate-transaction.use-case';
import { ESTATE_TRANSACTION_REPOSITORY } from './domain/interfaces/estate-transaction.repository';
import { EstateTransactionJsonRepository } from './infrastructure/json/estate-transaction.json.repository';

@Module({
  controllers: [EstateTransactionController],
  providers: [
    GetEstateTransactionUseCase,
    {
      provide: ESTATE_TRANSACTION_REPOSITORY,
      useClass: EstateTransactionJsonRepository
    }
  ]
})
export class TownPlanningModule {}
