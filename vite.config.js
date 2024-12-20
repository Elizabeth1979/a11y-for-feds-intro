import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        a11y: resolve(__dirname, 'public/a11y.html')
      }
    }
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src')
    }
  },
  server: {
    open: '/index.html'
  }
});
