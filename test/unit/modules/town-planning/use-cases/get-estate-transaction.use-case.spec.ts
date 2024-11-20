import { Test, TestingModule } from '@nestjs/testing';
import { GetEstateTransactionUseCase } from '../../../../../src/modules/town-planning/use-cases/get-estate-transaction.use-case';
import {
  ESTATE_TRANSACTION_REPOSITORY,
  IEstateTransactionRepository
} from '../../../../../src/modules/town-planning/domain/interfaces/estate-transaction.repository';

describe('GetEstateTransactionUseCase', () => {
  let useCase: GetEstateTransactionUseCase;
  let repository: IEstateTransactionRepository;

  beforeEach(async () => {
    const mockRepository = {
      findByConditions: jest.fn().mockResolvedValue([
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
      ])
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetEstateTransactionUseCase,
        {
          provide: ESTATE_TRANSACTION_REPOSITORY,
          useValue: mockRepository
        }
      ]
    }).compile();

    useCase = module.get<GetEstateTransactionUseCase>(
      GetEstateTransactionUseCase
    );
    repository = module.get<IEstateTransactionRepository>(
      ESTATE_TRANSACTION_REPOSITORY
    );
  });

  describe('execute', () => {
    it('should call the repository with the provided conditions', async () => {
      const year = 2015;
      const prefectureCode = 8;
      const type = 1;
      const result = await useCase.execute(year, prefectureCode, type);
      expect(repository.findByConditions).toHaveBeenCalledWith(
        year,
        prefectureCode,
        type
      );
      expect(result.status).toBe('success');
      expect(result.data).toHaveLength(1);
      expect(result.data?.[0].year).toBe(2015);
    });
  });
});
