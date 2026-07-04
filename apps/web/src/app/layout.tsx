import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'LopTorres ERP', description: 'ERP + CRM + BI + IA para Decoraciones LopTorres' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="es"><body>{children}</body></html>; }
