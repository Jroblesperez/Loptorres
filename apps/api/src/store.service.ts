import { Injectable } from '@nestjs/common';

export type Customer = { id: string; name: string; type: string; stage: string; value: number; owner: string; phone?: string; status?: string };

@Injectable()
export class StoreService {
  users = [{ id: 'u1', email: 'admin@loptorres.com', name: 'Administrador', role: 'Administrador' }];

  customers: Customer[] = [
    { id: 'c1', name: 'Constructora Altavista', type: 'Constructora', stage: 'Medición', value: 18400000, owner: 'Camila', phone: '+573001112233', status: 'Activo' },
    { id: 'c2', name: 'María Fernanda Ríos', type: 'Persona', stage: 'Cotización', value: 3200000, owner: 'Andrés', status: 'Seguimiento' },
    { id: 'c3', name: 'Oficinas Nova', type: 'Empresa', stage: 'Producción', value: 12600000, owner: 'Laura', status: 'Cliente' }
  ];

  providers = [
    { id: 'p1', name: 'Lafayette', catalog: 'Screen / Blackout', deliveryDays: 5, warranty: '24 meses', colors: ['Blanco', 'Arena', 'Gris'], margin: 0.38 },
    { id: 'p2', name: 'Pentagrama', catalog: 'Blackout / Sheer', deliveryDays: 7, warranty: '18 meses', colors: ['Marfil', 'Nieve'], margin: 0.35 },
    { id: 'p3', name: 'Hunter Douglas', catalog: 'Motorizadas', deliveryDays: 12, warranty: '36 meses', colors: ['Blanco', 'Negro'], margin: 0.42 }
  ];

  fabrics = [
    { id: 'f1', provider: 'Lafayette', type: 'Screen', collection: 'Solar 5%', color: 'Blanco', rollWidth: 2.5, costPerMeter: 85000, margin: 0.38 },
    { id: 'f2', provider: 'Pentagrama', type: 'Blackout', collection: 'Premium', color: 'Marfil', rollWidth: 2.8, costPerMeter: 92000, margin: 0.4 },
    { id: 'f3', provider: 'Vertilux', type: 'Sheer', collection: 'Elegance', color: 'Nieve', rollWidth: 3, costPerMeter: 135000, margin: 0.42 }
  ];

  inventory = [
    { id: 'i1', item: 'Tela Screen 5% Blanco', stock: 18, min: 25, unit: 'm²' },
    { id: 'i2', item: 'Motor tubular 35mm', stock: 4, min: 8, unit: 'und' },
    { id: 'i3', item: 'Perfil aluminio blanco', stock: 42, min: 30, unit: 'm' }
  ];

  income = [
    { id: 'in1', concept: 'Venta cortinas Oficinas Nova', client: 'Oficinas Nova', project: 'Sede norte', method: 'Transferencia', value: 12600000, invoice: 'FV-1028' },
    { id: 'in2', concept: 'Anticipo Sheer apartamento', client: 'María Fernanda Ríos', project: 'Apto 604', method: 'Tarjeta', value: 1600000, invoice: 'FV-1029' }
  ];

  expenses = [
    { id: 'eg1', supplier: 'Lafayette', concept: 'Compra de telas Screen', category: 'Compras', value: 4200000, invoice: 'FC-883', costCenter: 'Producción' },
    { id: 'eg2', supplier: 'EDS Primax', concept: 'Gasolina instalaciones', category: 'Transporte', value: 280000, invoice: 'POS-4421', costCenter: 'Instalación' },
    { id: 'eg3', supplier: 'Nómina', concept: 'Pago confeccionista', category: 'Nómina', value: 1850000, invoice: 'NOM-06', costCenter: 'Producción' }
  ];

  production = ['Pendiente', 'Fabricación', 'Control calidad', 'Despacho', 'Instalación'].map((stage, index) => ({ id: `p${index + 1}`, stage, orders: index + 3 }));
}
