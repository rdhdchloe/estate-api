export interface YearlyValue {
  year: number;
  value: number;
}

export interface EstateTransactionResult {
  prefectureCode: string;
  prefectureName: string;
  type: string;
  years: YearlyValue[];
}

export interface EstateTransaction {
  year: number;
  prefectureCode: number;
  type: number;
  data: {
    result: EstateTransactionResult;
  };
}

export interface EstateTransactionResponse {
  status: 'success' | 'error';
  data?: EstateTransaction[];
  message?: string;
}
