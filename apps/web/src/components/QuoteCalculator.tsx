'use client';

import { useMemo, useState } from 'react';
import { fabrics, providers } from '@/lib/data';

const money = (value: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);

export function QuoteCalculator() {
  const [fabricIndex, setFabricIndex] = useState(0);
  const [width, setWidth] = useState(2.4);
  const [height, setHeight] = useState(1.8);
  const [quantity, setQuantity] = useState(1);
  const [motor, setMotor] = useState(false);
  const [installation, setInstallation] = useState(140000);
  const [transport, setTransport] = useState(85000);
  const [taxRate, setTaxRate] = useState(0.19);

  const selectedFabric = fabrics[fabricIndex];

  const quote = useMemo(() => {
    const area = width * height * quantity;
    const wasteFactor = 1.08;
    const billableFabric = area * wasteFactor;
    const fabricCost = billableFabric * selectedFabric.costPerMeter;
    const profileCost = quantity * 120000;
    const accessoriesCost = quantity * 65000;
    const motorCost = motor ? quantity * 420000 : 0;
    const laborCost = quantity * installation;
    const totalCost = fabricCost + profileCost + accessoriesCost + motorCost + laborCost + transport;
    const salePrice = totalCost / (1 - selectedFabric.margin);
    const tax = salePrice * taxRate;

    return {
      area,
      billableFabric,
      fabricCost,
      totalCost,
      salePrice,
      tax,
      total: salePrice + tax,
      profit: salePrice - totalCost,
      margin: selectedFabric.margin
    };
  }, [height, installation, motor, quantity, selectedFabric, taxRate, transport, width]);

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">Motor parametrizable</p>
          <h2 className="text-2xl font-bold text-zinc-950">Cotizador inteligente</h2>
          <p className="text-sm text-zinc-500">Cambia proveedor, tela, margen, IVA, mano de obra, transporte y motorización sin tocar código.</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">Precio automático</span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        <label className="text-sm font-medium text-zinc-600">
          Tela / colección
          <select className="mt-1 w-full rounded-2xl border border-zinc-200 bg-white p-3" value={fabricIndex} onChange={(event) => setFabricIndex(Number(event.target.value))}>
            {fabrics.map((fabric, index) => (
              <option key={`${fabric.provider}-${fabric.collection}`} value={index}>
                {fabric.provider} · {fabric.type} · {fabric.collection} · {fabric.color}
              </option>
            ))}
          </select>
        </label>
        <NumberField label="Ancho (m)" value={width} step="0.1" onChange={setWidth} />
        <NumberField label="Alto (m)" value={height} step="0.1" onChange={setHeight} />
        <NumberField label="Cantidad" value={quantity} step="1" onChange={setQuantity} />
        <NumberField label="Instalación" value={installation} step="10000" onChange={setInstallation} />
        <NumberField label="Transporte" value={transport} step="10000" onChange={setTransport} />
        <NumberField label="IVA" value={taxRate} step="0.01" onChange={setTaxRate} />
        <label className="flex items-end gap-3 rounded-2xl border border-zinc-200 p-3 text-sm font-medium text-zinc-600">
          <input type="checkbox" checked={motor} onChange={(event) => setMotor(event.target.checked)} />
          Agregar motor tubular
        </label>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-4">
        <Metric label="Área" value={`${quote.area.toFixed(2)} m²`} />
        <Metric label="Tela facturable" value={`${quote.billableFabric.toFixed(2)} m²`} />
        <Metric label="Costo total" value={money(quote.totalCost)} />
        <Metric label="Precio venta" value={money(quote.salePrice)} />
        <Metric label="IVA" value={money(quote.tax)} />
        <Metric label="Total cliente" value={money(quote.total)} featured />
        <Metric label="Utilidad" value={money(quote.profit)} />
        <Metric label="Margen" value={`${Math.round(quote.margin * 100)}%`} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl bg-zinc-50 p-4">
          <h3 className="font-semibold text-zinc-900">Proveedor seleccionado</h3>
          <p className="mt-2 text-sm text-zinc-600">
            {providers.find((provider) => provider.name === selectedFabric.provider)?.name} · entrega estimada {providers.find((provider) => provider.name === selectedFabric.provider)?.deliveryDays} días · garantía {providers.find((provider) => provider.name === selectedFabric.provider)?.warranty}
          </p>
        </div>
        <button className="rounded-2xl bg-zinc-950 px-5 py-4 font-semibold text-white">Guardar cotización y generar orden</button>
      </div>
    </div>
  );
}

function NumberField({ label, value, step, onChange }: { label: string; value: number; step: string; onChange: (value: number) => void }) {
  return (
    <label className="text-sm font-medium text-zinc-600">
      {label}
      <input className="mt-1 w-full rounded-2xl border border-zinc-200 p-3" type="number" step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} />
    </label>
  );
}

function Metric({ label, value, featured = false }: { label: string; value: string; featured?: boolean }) {
  return (
    <div className={`rounded-2xl p-4 ${featured ? 'bg-brand-500 text-zinc-950' : 'bg-zinc-50 text-zinc-950'}`}>
      <p className="text-xs font-semibold uppercase tracking-wider opacity-70">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}
