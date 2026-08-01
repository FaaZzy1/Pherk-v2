import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Strictly detect if running inside GitHub Actions deployment
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  plugins: [react()],
  // Uses root '/' for Vercel & local dev, and '/Pherk-v2/' only for GitHub Pages
  base: isGitHubPages ? '/Pherk-v2/' : '/',
});