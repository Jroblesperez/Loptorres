import { Body, Controller, Get, Post } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('finance')
export class FinanceController {
  constructor(private store: StoreService) {}

  @Get('summary')
  summary() {
    const income = this.store.income.reduce((total, item) => total + item.value, 0);
    const expenses = this.store.expenses.reduce((total, item) => total + item.value, 0);
    return { income, expenses, profit: income - expenses };
  }

  @Get('income')
  getIncome() { return this.store.income; }

  @Post('income')
  createIncome(@Body() body: Record<string, unknown>) {
    const item = { id: `in${Date.now()}`, ...body };
    this.store.income.unshift(item as never);
    return item;
  }

  @Get('expenses')
  getExpenses() { return this.store.expenses; }

  @Post('expenses')
  createExpense(@Body() body: Record<string, unknown>) {
    const item = { id: `eg${Date.now()}`, ...body };
    this.store.expenses.unshift(item as never);
    return item;
  }
}
