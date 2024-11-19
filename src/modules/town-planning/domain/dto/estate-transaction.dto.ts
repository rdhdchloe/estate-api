import { IsIn, IsNumber, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

//　APIリクエストのデータ構造を定義する
export class EstateTransactionQueryDto {
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber() // 数値であることを確認
  @Min(2015) // 最小値は2015
  @Max(2018) // 最大値は2018
  year: number; // 年度

  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber() // 数値であることを確認
  @IsIn([8, 9, 10, 11, 12, 13, 14]) // 関東地方の都道府県コードのみ許可
  prefectureCode: number; // 都道府県コード

  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber() // 数値であることを確認
  @IsIn([1, 2]) // 1または2のみを許可
  type: number; // 種別（1：住宅地、2：商業地）
}
