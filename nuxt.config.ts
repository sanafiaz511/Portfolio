// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: 
  [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],
  vite: {
    plugins: [],
  },
   postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
