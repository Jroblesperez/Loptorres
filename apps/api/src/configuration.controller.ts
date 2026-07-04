import { Body, Controller, Get, Post } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('configuration')
export class ConfigurationController {
  constructor(private store: StoreService) {}

  @Get('providers')
  providers() { return this.store.providers; }

  @Post('providers')
  createProvider(@Body() body: Record<string, unknown>) {
    const provider = { id: `prov${Date.now()}`, ...body };
    this.store.providers.unshift(provider as never);
    return provider;
  }

  @Get('fabrics')
  fabrics() { return this.store.fabrics; }

  @Post('fabrics')
  createFabric(@Body() body: Record<string, unknown>) {
    const fabric = { id: `fab${Date.now()}`, ...body };
    this.store.fabrics.unshift(fabric as never);
    return fabric;
  }

  @Get('parameters')
  parameters() {
    return { taxRate: 0.19, laborBase: 140000, transportBase: 85000, installationBase: 140000, defaultWaste: 0.08 };
  }
}
