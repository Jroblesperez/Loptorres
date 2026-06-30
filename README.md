# Decoraciones LopTorres ERP + CRM + BI + IA

Plataforma full-stack modular para empresas de fabricación, instalación, mantenimiento, lavado, motorización y automatización de cortinas y persianas a la medida.

## Aplicaciones

- `apps/web`: frontend Next.js + React + Tailwind + TypeScript con flujo Login → ERP, sidebar persistente, dashboard, CRM, cotizador parametrizable, producción, inventario, compras, finanzas, agenda, reportes, configuración, administración y asistente IA.
- `apps/api`: backend NestJS + TypeScript con endpoints REST para autenticación, CRM, dashboard, cotizaciones, operaciones, finanzas, configuración parametrizable e IA.
- `apps/api/prisma/schema.prisma`: base del modelo PostgreSQL/Prisma para evolucionar a persistencia real.
- `docs/PRODUCT_BLUEPRINT.md`: blueprint funcional, técnico y SaaS del producto.

## Requisitos

- Node.js 20+
- npm 10+
- PostgreSQL opcional para activar Prisma en una siguiente iteración

## Configuración

```bash
cp .env.example .env
npm install
```

## Desarrollo local

```bash
npm run dev
```

- Web: http://localhost:3000
- API: http://localhost:4000/api/v1/dashboard/executive

## Scripts

```bash
npm run build
npm run lint
npm run typecheck
```

## Despliegue

- Frontend: Vercel usando `apps/web`.
- Backend: Railway usando `apps/api` y el `railway.json` incluido.
- Variables mínimas: `NEXT_PUBLIC_API_URL`, `PORT`, `JWT_SECRET`, `DATABASE_URL`, `CORS_ORIGIN`.

## Flujo de experiencia

La aplicación ya no inicia como landing page. El flujo principal es:

```text
Login → Dashboard Ejecutivo → Layout ERP con Sidebar → Módulos de trabajo
```

El menú lateral incluye Dashboard, CRM, Clientes, Cotizaciones, Producción, Inventario, Compras, Finanzas, Agenda, Reportes, IA, Configuración y Administración.

## Parametrización del cotizador

El módulo de Configuración permite modelar proveedores, telas, colecciones, colores, costos, márgenes, IVA, mano de obra, transporte e instalación para que los precios cambien desde la interfaz y no desde el código fuente.
