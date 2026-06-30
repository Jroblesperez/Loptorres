import { Body, Controller, Post } from '@nestjs/common';
@Controller('ai')
export class AiController { @Post('assistant/query') ask(@Body() body:{question:string}){ return { question: body.question, answer: 'Prioriza cotizaciones pendientes de alto valor, revisa inventario crítico de motores y contacta clientes sin seguimiento en 7 días.', confidence: 0.91, tools: ['dashboard.executive','customers.timeline','inventory.critical'] }; } }
