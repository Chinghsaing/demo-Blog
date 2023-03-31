import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':resolve(__dirname,"src")
    },
  },
  css:{
    preprocessorOptions:{
      less:{
        additionalData:  `@import "${resolve(__dirname, 'src/style/GobalStyle.less')}";`,
        javascriptEnable:true,
      },
      
    }
    },
    base: './',
    build: {
        rollupOptions: {
          output: {
            chunkFileNames: 'static/js/[name]-[hash].js',
            entryFileNames: 'static/js/[name]-[hash].js',
            assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          }
        }
      }
})
