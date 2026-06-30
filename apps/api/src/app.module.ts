import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { CrmController } from './crm/crm.controller';
import { QuotesController } from './quotes/quotes.controller';
import { DashboardController } from './dashboard/dashboard.controller';
import { OperationsController } from './operations/operations.controller';
import { AiController } from './ai/ai.controller';
import { StoreService } from './store.service';
@Module({ controllers: [AuthController, CrmController, QuotesController, DashboardController, OperationsController, AiController], providers: [StoreService] })
export class AppModule {}
