// import path from "path"
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       // eslint-disable-next-line no-undef
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })

import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
});
