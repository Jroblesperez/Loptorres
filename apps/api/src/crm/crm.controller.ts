import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { StoreService, Customer } from '../store.service';
@Controller('customers')
export class CrmController {
  constructor(private store: StoreService) {}
  @Get() findAll() { return this.store.customers; }
  @Post() create(@Body() body: Omit<Customer, 'id'>) { const customer = { id: `c${Date.now()}`, ...body }; this.store.customers.unshift(customer); return customer; }
  @Get(':id') findOne(@Param('id') id: string) { return this.store.customers.find(c => c.id === id); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: Partial<Customer>) { const item = this.store.customers.find(c => c.id === id); Object.assign(item ?? {}, body); return item; }
  @Get(':id/timeline') timeline(@Param('id') id: string) { return [{ id:'a1', customerId:id, type:'WhatsApp', note:'Envío de catálogo y seguimiento' }, { id:'a2', customerId:id, type:'Cotización', note:'Cotización generada automáticamente' }]; }
}
