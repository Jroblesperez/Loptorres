import { Injectable } from '@nestjs/common';
export type Customer = { id: string; name: string; type: string; stage: string; value: number; owner: string; phone?: string };
@Injectable()
export class StoreService {
  users = [{ id: 'u1', email: 'admin@loptorres.com', name: 'Administrador', role: 'Administrador' }];
  customers: Customer[] = [
    { id: 'c1', name: 'Constructora Altavista', type: 'Empresa', stage: 'Medición', value: 18400000, owner: 'Camila', phone: '+573001112233' },
    { id: 'c2', name: 'María Fernanda Ríos', type: 'Persona', stage: 'Cotización', value: 3200000, owner: 'Andrés' },
    { id: 'c3', name: 'Oficinas Nova', type: 'Corporativo', stage: 'Producción', value: 12600000, owner: 'Laura' }
  ];
  inventory = [
    { id: 'i1', item: 'Tela Screen 5% Blanco', stock: 18, min: 25, unit: 'm²' },
    { id: 'i2', item: 'Motor tubular 35mm', stock: 4, min: 8, unit: 'und' },
    { id: 'i3', item: 'Perfil aluminio blanco', stock: 42, min: 30, unit: 'm' }
  ];
  production = ['Pendiente', 'Corte', 'Confección', 'Armado', 'Calidad', 'Despacho'].map((stage, index) => ({ id: `p${index+1}`, stage, orders: index + 2 }));
}
