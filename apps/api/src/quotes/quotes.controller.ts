import { Body, Controller, Post } from '@nestjs/common';
type QuoteInput = { widthM: number; heightM: number; quantity: number; fabricCostM2?: number; systemCost?: number; motor?: boolean; marginPct?: number; taxPct?: number; discountPct?: number };
@Controller('quotations')
export class QuotesController {
  @Post('calculate') calculate(@Body() input: QuoteInput) {
    const quantity = input.quantity || 1;
    const area = input.widthM * input.heightM * quantity;
    const material = area * (input.fabricCostM2 ?? 85000) * 1.08;
    const system = quantity * (input.systemCost ?? 120000);
    const motor = input.motor ? quantity * 420000 : 0;
    const labor = quantity * 90000;
    const cost = material + system + motor + labor;
    const margin = input.marginPct ?? 0.38;
    const netPrice = cost / (1 - margin);
    const discount = netPrice * (input.discountPct ?? 0);
    const tax = (netPrice - discount) * (input.taxPct ?? 0.19);
    return { area, cost, netPrice, discount, tax, total: netPrice - discount + tax, profit: netPrice - discount - cost, margin };
  }
  @Post('ai-draft') aiDraft(@Body() body: { prompt: string }) { return { prompt: body.prompt, extracted: { product: 'Sheer elegance', widthM: 2.4, heightM: 1.8, quantity: 1, color: 'Blanco' }, nextAction: 'calculate' }; }
  @Post() create(@Body() body: Record<string, unknown>) { return { id: `q${Date.now()}`, status: 'draft', ...body }; }
}
