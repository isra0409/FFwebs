import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-icons/fa': 'react-icons/fa', // Asegúrate de tener el alias correcto
    },
  },
});
