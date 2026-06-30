# Decoraciones LopTorres ERP + CRM + BI + IA

Plataforma full-stack modular para empresas de fabricación, instalación, mantenimiento, lavado, motorización y automatización de cortinas y persianas a la medida.

## Aplicaciones

- `apps/web`: frontend Next.js + React + Tailwind + TypeScript con login, dashboard, CRM, cotizador, producción, inventario, agenda, finanzas y asistente IA.
- `apps/api`: backend NestJS + TypeScript con endpoints REST para autenticación, CRM, dashboard, cotizaciones, operaciones e IA.
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
