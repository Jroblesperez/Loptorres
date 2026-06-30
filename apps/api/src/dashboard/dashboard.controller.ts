import { Controller, Get } from '@nestjs/common';
import { StoreService } from '../store.service';
@Controller('dashboard')
export class DashboardController { constructor(private store: StoreService) {} @Get('executive') executive(){ return { salesDay: 4200000, salesMonth: 68400000, salesYear: 621000000, income: 68400000, expenses: 46500000, profit: 21900000, cashFlow: 36200000, pendingInvoices: 8, pendingQuotes: 14, approvedQuotes: 21, lostQuotes: 5, productionProjects: 18, scheduledInstallations: 9, criticalInventory: this.store.inventory.filter(i=>i.stock<i.min), topProducts: ['Screen','Sheer','Blackout'] }; } }
