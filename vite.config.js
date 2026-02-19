import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  base: "/S9_Ecom-Project/"
  plugins: [react()],
})
