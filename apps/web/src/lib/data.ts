export const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'crm', label: 'CRM', icon: '🤝' },
  { id: 'clientes', label: 'Clientes', icon: '👥' },
  { id: 'cotizaciones', label: 'Cotizaciones', icon: '🧾' },
  { id: 'produccion', label: 'Producción', icon: '🏭' },
  { id: 'inventario', label: 'Inventario', icon: '📦' },
  { id: 'compras', label: 'Compras', icon: '🛒' },
  { id: 'finanzas', label: 'Finanzas', icon: '💰' },
  { id: 'agenda', label: 'Agenda', icon: '📅' },
  { id: 'reportes', label: 'Reportes', icon: '📈' },
  { id: 'ia', label: 'IA', icon: '✨' },
  { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
  { id: 'administracion', label: 'Administración', icon: '🛡️' }
] as const;

export const customers = [
  { name: 'Constructora Altavista', type: 'Constructora', stage: 'Medición', value: 18400000, owner: 'Camila', status: 'Activo' },
  { name: 'María Fernanda Ríos', type: 'Persona', stage: 'Cotización', value: 3200000, owner: 'Andrés', status: 'Seguimiento' },
  { name: 'Oficinas Nova', type: 'Empresa', stage: 'Producción', value: 12600000, owner: 'Laura', status: 'Cliente' },
  { name: 'Arq. Daniel Restrepo', type: 'Arquitecto', stage: 'Negociación', value: 7800000, owner: 'Camila', status: 'Aliado' }
];

export const providers = [
  { name: 'Lafayette', deliveryDays: 5, warranty: '24 meses', margin: 0.38 },
  { name: 'Pentagrama', deliveryDays: 7, warranty: '18 meses', margin: 0.35 },
  { name: 'Hunter Douglas', deliveryDays: 12, warranty: '36 meses', margin: 0.42 },
  { name: 'Vertilux', deliveryDays: 8, warranty: '24 meses', margin: 0.36 }
];

export const fabrics = [
  { provider: 'Lafayette', type: 'Screen', collection: 'Solar 5%', color: 'Blanco', rollWidth: 2.5, costPerMeter: 85000, margin: 0.38 },
  { provider: 'Pentagrama', type: 'Blackout', collection: 'Premium', color: 'Marfil', rollWidth: 2.8, costPerMeter: 92000, margin: 0.4 },
  { provider: 'Vertilux', type: 'Sheer', collection: 'Elegance', color: 'Nieve', rollWidth: 3, costPerMeter: 135000, margin: 0.42 }
];

export const finance = {
  income: [
    { concept: 'Venta cortinas Oficinas Nova', client: 'Oficinas Nova', project: 'Sede norte', method: 'Transferencia', value: 12600000, invoice: 'FV-1028' },
    { concept: 'Anticipo Sheer apartamento', client: 'María Fernanda Ríos', project: 'Apto 604', method: 'Tarjeta', value: 1600000, invoice: 'FV-1029' }
  ],
  expenses: [
    { supplier: 'Lafayette', concept: 'Compra de telas Screen', category: 'Compras', value: 4200000, invoice: 'FC-883', costCenter: 'Producción' },
    { supplier: 'EDS Primax', concept: 'Gasolina instalaciones', category: 'Transporte', value: 280000, invoice: 'POS-4421', costCenter: 'Instalación' },
    { supplier: 'Nómina', concept: 'Pago confeccionista', category: 'Nómina', value: 1850000, invoice: 'NOM-06', costCenter: 'Producción' }
  ]
};

export const inventory = [
  { item: 'Tela Screen 5% Blanco', stock: 18, min: 25, unit: 'm²', status: 'Crítico' },
  { item: 'Motor tubular 35mm', stock: 4, min: 8, unit: 'und', status: 'Crítico' },
  { item: 'Perfil aluminio blanco', stock: 42, min: 30, unit: 'm', status: 'OK' }
];

export const productionStages = ['Pendiente', 'Fabricación', 'Control calidad', 'Despacho', 'Instalación'];
