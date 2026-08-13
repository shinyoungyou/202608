import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// If you deploy this to GitHub Pages as a project site
// (https://<username>.github.io/202608/), keep `base` set to
// '/202608/'. If you deploy it as a custom domain or a user/org
// page instead, change `base` to '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/202608/",
});
