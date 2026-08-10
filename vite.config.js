import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy this to GitHub Pages as a project site
// (https://<username>.github.io/portfolio-202608/), keep `base` set to
// '/portfolio-202608/'. If you deploy it as a custom domain or a user/org
// page instead, change `base` to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-202608/',
})
