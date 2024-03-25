import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
    proxy: {
      '/pooh.wav': {
        target: 'http://43.203.227.36',
        changeOrigin: true,
      },
    },
	},
});
