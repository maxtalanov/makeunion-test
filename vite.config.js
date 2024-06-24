import { defineConfig } from 'vite'
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react'
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/modules'),
      '@app': path.resolve(__dirname, './src/components/App/App.jsx'),
      '@ui': path.resolve(__dirname, './src/components/UI'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@api': path.resolve(__dirname, './src/api'),
      '@hook': path.resolve(__dirname, './src/pages'),
    }
  }
})
