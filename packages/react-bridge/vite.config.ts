import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ 
    // jsxImportSource: '@emotion/react' 
  })],
  publicDir: path.resolve("../../public"),
  root: "./demo"
})