import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Unocss({
    rules: [
      [/^myxy-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
    ]
  })]
})
