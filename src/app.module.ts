import { Module } from '@nestjs/common';
import { TownPlanningModule } from './modules/town-planning/town-planning.module';

@Module({
  imports: [TownPlanningModule]
})
export class AppModule {}
