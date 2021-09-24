import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: [
    {
      find: '@',
      //此处填'/src'也可以
      replacement: resolve(__dirname, 'src')
    },
    {
      find: '/assets',
      //此处填'/src'也可以
      replacement: resolve(__dirname, 'src/assets')
    },
    {
      find: '/common',
      //此处填'/src'也可以
      replacement: resolve(__dirname, 'src/common')
    },
    {
      find: '/components',
      //此处填'/src'也可以
      replacement: resolve(__dirname, 'src/components')
    },
    {
      find: '/network',
      //此处填'/src'也可以
      replacement: resolve(__dirname, 'src/network')
    }
  ],
})
