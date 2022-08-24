import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [autoprefixer],
        },
    },
    plugins: [react(), ssr({ prerender: true })],
});
