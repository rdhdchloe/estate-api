import { Test, TestingModule } from '@nestjs/testing';
import { EstateTransactionController } from '../../../../../src/modules/town-planning/controllers/estate-transaction.controller';
import { GetEstateTransactionUseCase } from '../../../../../src/modules/town-planning/use-cases/get-estate-transaction.use-case';

describe('EstateTransactionController', () => {
  let controller: EstateTransactionController;
  let useCase: GetEstateTransactionUseCase;

  beforeEach(async () => {
    const mockUseCase = {
      execute: jest.fn().mockResolvedValue({
        status: 'success',
        data: [
          {
            year: 2015,
            prefectureCode: 8,
            type: 1,
            data: {
              result: {
                prefectureCode: '8',
                prefectureName: '茨城県',
                type: '1',
                years: [
                  {
                    year: 2015,
                    value: 22871
                  }
                ]
              }
            }
          }
        ]
      })
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstateTransactionController],
      providers: [
        {
          provide: GetEstateTransactionUseCase,
          useValue: mockUseCase
        }
      ]
    }).compile();

    controller = module.get<EstateTransactionController>(
      EstateTransactionController
    );
    useCase = module.get<GetEstateTransactionUseCase>(
      GetEstateTransactionUseCase
    );
  });

  describe('GetEstateTransactions', () => {
    it('should return estate transactions', async () => {
      const query = {
        year: 2015,
        prefectureCode: 8,
        type: 1
      };
      const result = await controller.getEstateTransactions(query);
      expect(useCase.execute).toHaveBeenCalledWith(2015, 8, 1);
      expect(result.status).toBe('success');
      expect(result.data).toHaveLength(1);
      expect(result.data?.[0].year).toBe(2015);
    });
  });
});
