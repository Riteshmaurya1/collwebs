import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import lineClamp from "@tailwindcss/line-clamp"; // ✅ ES Module import

export default defineConfig({
  plugins: [react(), tailwindcss(), lineClamp()], // ✅ Call it as a function
});
