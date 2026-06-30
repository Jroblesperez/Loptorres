import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { brand: { 50:'#fff8ed', 500:'#c98b2c', 900:'#21160a' } } } }, plugins: [] };
export default config;
