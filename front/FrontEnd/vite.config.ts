import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    watch: {
      usePolling: true, // Useful if auto-reload isn't working
    },
    strictPort: true,
    port: 5173, // Change if needed
    open: true, // Automatically opens the browser
  },
});
