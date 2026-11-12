// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow.
// Locally and on the real domain the site lives at the root.
export default defineConfig({
  site: process.env.SITE_URL || 'https://t-logisticsinc.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  build: {
    // Small CSS is inlined so the first paint has no render-blocking request.
    inlineStylesheets: 'always',
  },
});
