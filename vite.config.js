import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.jpg', 'pwa-icon.jpg', 'materi-presentasi.pdf'],
      manifest: {
        name: 'Digital Skill Up - HMJ PBA',
        short_name: 'DSU PBA',
        description: 'Panduan komprehensif Sosmed HMJ PBA UIN SSC',
        theme_color: '#BC305F',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-icon.jpg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: 'pwa-icon.jpg',
            sizes: '512x512',
            type: 'image/jpeg'
          },
          {
            src: 'pwa-icon.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
