import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    vite: true,
    app: true,
    capi: true
  },
  nitro: {
    preset: 'server'
  },
  target: 'static',
  components: true,
})