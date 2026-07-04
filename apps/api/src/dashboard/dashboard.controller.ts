import { Controller, Get } from '@nestjs/common';
import { StoreService } from '../store.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private store: StoreService) {}

  @Get('executive')
  executive() {
    const income = this.store.income.reduce((total, item) => total + item.value, 0);
    const expenses = this.store.expenses.reduce((total, item) => total + item.value, 0);
    return {
      salesDay: 4200000,
      salesMonth: 68400000,
      salesYear: 621000000,
      income,
      expenses,
      profit: income - expenses,
      cashFlow: 36200000,
      pendingInvoices: 8,
      pendingQuotes: 14,
      approvedQuotes: 21,
      lostQuotes: 5,
      productionProjects: 18,
      scheduledInstallations: 9,
      maintenanceServices: 6,
      warranties: 3,
      criticalInventory: this.store.inventory.filter((item) => item.stock < item.min),
      topProducts: ['Screen', 'Sheer', 'Blackout']
    };
  }
}
