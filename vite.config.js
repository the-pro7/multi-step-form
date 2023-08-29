import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/multi-step-form-main", // change the name to "multi-step-from" if you're gonna merge with "https://github.com/the-pro7/multi-step-from"
  plugins: [react()],
});
