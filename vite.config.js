import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'node:path';
import { configMap } from './projectsConfig.js'
const projectName = process.env.PROJECT_NAME

// // 获取命令行参数
// const argv = process.argv;
// console.log('argv数据如下：', argv)
// // const process = process;
// console.log('process数据如下：', process)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin(configMap[projectName])
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    cssCodeSplit: true,
    emptyOutDir: true,
    sourcemap: false,
    assetsDir: 'assets', // 默认 assets
    outDir: `dist/dist-${projectName}`, // 输出到dist
    rollupOptions: {
      input: {
      },
      output: {
        compact: true,
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name].[ext]",
      }
    }
  }
})
