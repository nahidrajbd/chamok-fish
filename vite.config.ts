import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: { '@': path.resolve(__dirname, './src') },
    },
    ssr: {
        // react-helmet-async ships CommonJS only; bundle it into the SSR
        // build so the prerender can import its named exports.
        noExternal: ['react-helmet-async'],
    },
});
