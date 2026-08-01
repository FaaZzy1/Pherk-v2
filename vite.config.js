import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The smart logic: We dynamically set the base path.
// When GITHUB_ACTIONS environment variable is present, it's building for GitHub Pages.
const base_path = process.env.GITHUB_ACTIONS ? '/Pherk-v2/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base_path, // Uses the smart path here
});