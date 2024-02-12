import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import virtual, { updateVirtualModule } from 'vite-plugin-virtual'
import restart from 'vite-plugin-restart'

let counter = 1

const pluginVirtual = virtual({
  'virtual:counter': { counter },
})

const config = defineConfig(({ command }) => {
  if (command === 'serve') {
    // Showcase how to invalidate the virtual module content
    setInterval(() => {
      counter++
      updateVirtualModule(pluginVirtual, 'virtual:counter', { counter })
    }, 2000)
  }

  return {
    plugins: [
      pluginVirtual,
      vue(),
      restart({
        restart: ['../../dist/*.js'],
      }),
    ],
  }
})

export default config
