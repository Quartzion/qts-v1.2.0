import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();
const vPort = parseInt(process.env.VITE_PORT);

import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/',
    build: {
        outDir: 'build',
    },
    rollupOptions: {
        input: {
            main: 'index.html'
        }
    },
    server: {
        port: vPort,
        open: true,
        proxy: {
            '/api': 'http://localhost:3333'
        }
    }
});