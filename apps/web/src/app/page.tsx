'use client';

import { useMemo, useState } from 'react';
import { QuoteCalculator } from '@/components/QuoteCalculator';
import { customers, finance, inventory, menuItems, productionStages, providers, fabrics } from '@/lib/data';

const money = (value: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeModule, setActiveModule] = useState('dashboard');

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <main className="flex min-h-screen bg-[#f6f3ee] text-zinc-950">
      <aside className="hidden w-72 shrink-0 border-r border-zinc-200 bg-zinc-950 p-4 text-white lg:block">
        <div className="mb-6 flex items-center gap-3 rounded-3xl bg-white/10 p-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-500 font-bold text-zinc-950">LT</div>
          <div>
            <p className="font-bold">Decoraciones LopTorres</p>
            <p className="text-xs text-white/50">ERP profesional</p>
          </div>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition ${activeModule === item.id ? 'bg-brand-500 font-semibold text-zinc-950' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
              onClick={() => setActiveModule(item.id)}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white/85 px-4 py-3 backdrop-blur md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">Sistema empresarial</p>
            <h1 className="text-xl font-bold md:text-2xl">{menuItems.find((item) => item.id === activeModule)?.label}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-2xl border border-zinc-200 px-4 py-2 text-sm md:block">Buscar cliente, pedido o factura</button>
            <button className="rounded-2xl bg-zinc-950 px-4 py-2 text-sm font-semibold text-white" onClick={() => setActiveModule('ia')}>Asistente IA</button>
          </div>
        </header>

        <div className="border-b border-zinc-200 bg-white p-2 lg:hidden">
          <div className="flex gap-2 overflow-x-auto">
            {menuItems.map((item) => (
              <button key={item.id} className={`whitespace-nowrap rounded-2xl px-3 py-2 text-sm ${activeModule === item.id ? 'bg-zinc-950 text-white' : 'bg-zinc-100'}`} onClick={() => setActiveModule(item.id)}>
                {item.icon} {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 md:p-8">
          <ModuleContent activeModule={activeModule} />
        </div>
      </section>
    </main>
  );
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top,#fff7ed,#f6f3ee_42%,#e7dfd2)] px-4">
      <section className="w-full max-w-md rounded-[2rem] border border-white bg-white/85 p-8 shadow-2xl backdrop-blur">
        <div className="text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-zinc-950 text-xl font-bold text-brand-500">LT</div>
          <h1 className="mt-5 text-2xl font-bold">Decoraciones LopTorres</h1>
          <p className="mt-2 text-sm text-zinc-500">Iniciar sesión en el ERP</p>
        </div>
        <label className="mt-8 block text-sm font-medium text-zinc-600">
          Correo electrónico
          <input className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white p-3" defaultValue="admin@loptorres.com" />
        </label>
        <label className="mt-4 block text-sm font-medium text-zinc-600">
          Contraseña
          <input className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white p-3" defaultValue="demo1234" type="password" />
        </label>
        <button className="mt-6 w-full rounded-2xl bg-zinc-950 p-3 font-semibold text-white" onClick={onLogin}>Ingresar</button>
        <button className="mt-3 w-full rounded-2xl border border-zinc-200 p-3 text-sm font-medium">¿Olvidó su contraseña?</button>
      </section>
    </main>
  );
}

function ModuleContent({ activeModule }: { activeModule: string }) {
  if (activeModule === 'cotizaciones') return <QuoteCalculator />;
  if (activeModule === 'finanzas') return <FinanceModule />;
  if (activeModule === 'configuracion') return <ConfigurationModule />;
  if (activeModule === 'administracion') return <AdministrationModule />;
  if (activeModule === 'crm' || activeModule === 'clientes') return <CrmModule />;
  if (activeModule === 'produccion') return <ProductionModule />;
  if (activeModule === 'inventario') return <InventoryModule />;
  if (activeModule === 'compras') return <PurchasingModule />;
  if (activeModule === 'agenda') return <AgendaModule />;
  if (activeModule === 'reportes') return <ReportsModule />;
  if (activeModule === 'ia') return <AiModule />;
  return <DashboardModule />;
}

function DashboardModule() {
  const income = finance.income.reduce((total, item) => total + item.value, 0);
  const expenses = finance.expenses.reduce((total, item) => total + item.value, 0);
  const profit = income - expenses;
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Kpi label="Ventas del día" value={money(4200000)} />
        <Kpi label="Ventas del mes" value={money(68400000)} />
        <Kpi label="Utilidad" value={money(profit)} tone="success" />
        <Kpi label="Flujo de caja" value={money(36200000)} />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
        <Panel title="Operación en tiempo real">
          <div className="grid gap-3 md:grid-cols-3">
            <MiniMetric label="Cotizaciones pendientes" value="14" />
            <MiniMetric label="Órdenes producción" value="18" />
            <MiniMetric label="Instalaciones programadas" value="9" />
            <MiniMetric label="Mantenimientos" value="6" />
            <MiniMetric label="Garantías" value="3" />
            <MiniMetric label="Material crítico" value={String(inventory.filter((item) => item.stock < item.min).length)} />
          </div>
        </Panel>
        <Panel title="Alertas inteligentes">
          <ul className="space-y-3 text-sm text-zinc-600">
            <li>• Motor tubular 35mm por debajo del mínimo.</li>
            <li>• 4 cotizaciones de alto valor requieren seguimiento hoy.</li>
            <li>• Margen de Vertilux superior al promedio del mes.</li>
          </ul>
        </Panel>
      </div>
    </div>
  );
}

function FinanceModule() {
  const income = finance.income.reduce((total, item) => total + item.value, 0);
  const expenses = finance.expenses.reduce((total, item) => total + item.value, 0);
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Kpi label="Ingresos" value={money(income)} />
        <Kpi label="Egresos" value={money(expenses)} tone="danger" />
        <Kpi label="Utilidad" value={money(income - expenses)} tone="success" />
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="Registrar ingresos">
          <DataTable headers={['Concepto', 'Cliente', 'Proyecto', 'Pago', 'Valor', 'Factura']} rows={finance.income.map((item) => [item.concept, item.client, item.project, item.method, money(item.value), item.invoice])} />
        </Panel>
        <Panel title="Registrar egresos">
          <DataTable headers={['Proveedor', 'Concepto', 'Categoría', 'Valor', 'Factura', 'Centro costo']} rows={finance.expenses.map((item) => [item.supplier, item.concept, item.category, money(item.value), item.invoice, item.costCenter])} />
        </Panel>
      </div>
    </div>
  );
}

function ConfigurationModule() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <Panel title="Proveedores parametrizables">
        <DataTable headers={['Proveedor', 'Entrega', 'Garantía', 'Margen']} rows={providers.map((provider) => [provider.name, `${provider.deliveryDays} días`, provider.warranty, `${Math.round(provider.margin * 100)}%`])} />
      </Panel>
      <Panel title="Telas, colecciones y costos">
        <DataTable headers={['Proveedor', 'Tipo', 'Colección', 'Color', 'Rollo', 'Costo', 'Margen']} rows={fabrics.map((fabric) => [fabric.provider, fabric.type, fabric.collection, fabric.color, `${fabric.rollWidth} m`, money(fabric.costPerMeter), `${Math.round(fabric.margin * 100)}%`])} />
      </Panel>
      <Panel title="Parámetros de cálculo">
        <div className="grid gap-3 md:grid-cols-2">
          {['IVA configurable', 'Mano de obra', 'Transporte', 'Instalación', 'Márgenes por producto', 'Reglas por tipo de cortina'].map((item) => <MiniMetric key={item} label={item} value="Editable" />)}
        </div>
      </Panel>
    </div>
  );
}

function AdministrationModule() {
  return <Panel title="Administración"><div className="grid gap-3 md:grid-cols-4">{['Usuarios', 'Roles', 'Permisos', 'Empresas', 'Sucursales', 'Impuestos', 'Monedas', 'Bancos', 'Parámetros', 'Backups', 'Auditoría', 'Seguridad'].map((item) => <MiniMetric key={item} label={item} value="Activo" />)}</div></Panel>;
}

function CrmModule() {
  return <Panel title="CRM empresarial"><DataTable headers={['Cliente', 'Tipo', 'Etapa', 'Valor', 'Responsable', 'Estado']} rows={customers.map((customer) => [customer.name, customer.type, customer.stage, money(customer.value), customer.owner, customer.status])} /></Panel>;
}

function ProductionModule() {
  return <Panel title="Flujo de producción"><div className="grid gap-3 md:grid-cols-5">{productionStages.map((stage, index) => <div key={stage} className="rounded-2xl bg-zinc-50 p-4"><p className="font-semibold">{stage}</p><p className="mt-2 text-sm text-zinc-500">{index + 3} órdenes</p></div>)}</div></Panel>;
}

function InventoryModule() {
  return <Panel title="Inventario"><DataTable headers={['Material', 'Stock', 'Mínimo', 'Unidad', 'Estado']} rows={inventory.map((item) => [item.item, String(item.stock), String(item.min), item.unit, item.status])} /></Panel>;
}

function PurchasingModule() {
  return <Panel title="Compras"><DataTable headers={['Solicitud', 'Proveedor', 'Estado', 'Valor']} rows={[['Tela Screen 5%', 'Lafayette', 'Por aprobar', money(4200000)], ['Motores 35mm', 'Hunter Douglas', 'Solicitado', money(3360000)]]} /></Panel>;
}

function AgendaModule() {
  return <Panel title="Agenda"><DataTable headers={['Hora', 'Cliente', 'Servicio', 'Responsable']} rows={[[ '09:00', 'Constructora Altavista', 'Medición', 'Carlos' ], [ '11:30', 'María Fernanda Ríos', 'Instalación', 'Equipo 2' ], [ '15:00', 'Oficinas Nova', 'Mantenimiento', 'Equipo 1' ]]} /></Panel>;
}

function ReportsModule() {
  return <Panel title="Reportes"><div className="grid gap-3 md:grid-cols-3">{['Ventas', 'Utilidad', 'Clientes', 'Productos', 'Vendedores', 'Fabricación', 'Instalaciones', 'Finanzas', 'Rentabilidad'].map((item) => <MiniMetric key={item} label={item} value="Disponible" />)}</div></Panel>;
}

function AiModule() {
  return <Panel title="Asistente IA"><div className="space-y-4"><div className="rounded-2xl bg-zinc-100 p-4">¿Cuál fue el margen de utilidad por proveedor?</div><div className="rounded-2xl bg-zinc-950 p-4 text-white">Hunter Douglas tiene el margen más alto estimado con 42%, seguido por Vertilux con 36%. Recomiendo revisar tiempos de entrega antes de priorizar volumen.</div></div></Panel>;
}

function Kpi({ label, value, tone = 'default' }: { label: string; value: string; tone?: 'default' | 'success' | 'danger' }) {
  const toneClass = tone === 'success' ? 'text-emerald-600' : tone === 'danger' ? 'text-rose-600' : 'text-zinc-950';
  return <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"><p className="text-sm text-zinc-500">{label}</p><p className={`mt-2 text-2xl font-bold ${toneClass}`}>{value}</p></div>;
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"><h2 className="mb-4 text-xl font-bold">{title}</h2>{children}</section>;
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl bg-zinc-50 p-4"><p className="text-sm text-zinc-500">{label}</p><p className="mt-1 text-lg font-semibold">{value}</p></div>;
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead><tr className="border-b text-zinc-500">{headers.map((header) => <th key={header} className="py-3 pr-4 font-medium">{header}</th>)}</tr></thead>
        <tbody>{rows.map((row) => <tr key={row.join('-')} className="border-b last:border-0">{row.map((cell, index) => <td key={`${cell}-${index}`} className="py-3 pr-4">{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
