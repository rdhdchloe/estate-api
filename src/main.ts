import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  // NestJS アプリケーション作成
  const app = await NestFactory.create(AppModule);

  // リクエストのバリデーションを有効化
  app.useGlobalPipes(new ValidationPipe());

  // 3000番ポートでサーバーを起動
  await app.listen(3000);
}
bootstrap();
