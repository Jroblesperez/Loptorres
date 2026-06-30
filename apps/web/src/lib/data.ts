export const modules = [
  { id:'crm', name:'CRM', desc:'Clientes, oportunidades e historial completo', kpi:'128 clientes', href:'#crm' },
  { id:'quotes', name:'Cotizador IA', desc:'Cotizaciones a medida con costo, margen, PDF y aprobación', kpi:'2 min', href:'#cotizador' },
  { id:'production', name:'Producción', desc:'Órdenes, corte, confección, armado y calidad', kpi:'18 activas', href:'#produccion' },
  { id:'inventory', name:'Inventario', desc:'Telas, motores, perfiles, accesorios, mínimos y QR', kpi:'7 críticos', href:'#inventario' },
  { id:'installations', name:'Instalaciones', desc:'Agenda, rutas, fotos, materiales y firma cliente', kpi:'9 hoy', href:'#agenda' },
  { id:'finance', name:'Finanzas', desc:'Ingresos, egresos, caja, CxC, CxP y utilidad', kpi:'32% margen', href:'#finanzas' },
  { id:'bi', name:'BI', desc:'KPIs comerciales, operativos y financieros', kpi:'24 alertas', href:'#dashboard' },
  { id:'ai', name:'Asistente IA', desc:'Consulta ventas, cartera, inventario y genera cotizaciones', kpi:'online', href:'#ia' }
];
export const customers = [
  { name:'Constructora Altavista', type:'Empresa', stage:'Medición', value: 18400000, owner:'Camila' },
  { name:'María Fernanda Ríos', type:'Persona', stage:'Cotización', value: 3200000, owner:'Andrés' },
  { name:'Oficinas Nova', type:'Corporativo', stage:'Producción', value: 12600000, owner:'Laura' }
];
export const inventory = [
  { item:'Tela Screen 5% Blanco', stock: 18, min: 25, unit:'m²' },
  { item:'Motor tubular 35mm', stock: 4, min: 8, unit:'und' },
  { item:'Perfil aluminio blanco', stock: 42, min: 30, unit:'m' }
];
