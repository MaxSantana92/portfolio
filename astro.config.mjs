import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://MaxSantana92.github.io/portfolio',
  //base: '/portfolio',
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
})
