import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/ibm-front-end-react/',
	plugins: [react()],
});
