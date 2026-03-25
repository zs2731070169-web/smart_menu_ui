import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // 前端端口，浏览器请求后端地址时url同样是http://localhost:3000，是同源请求，但代理层会匹配资源/smart/menu，把请求代理到http://localhost:8000
    proxy: {
      '/smart/menu': {
        target: 'http://localhost:8000', // 后端接口地址
        changeOrigin: true, // 允许代理，将前端url代理为后端url
      }
    },
  },
})