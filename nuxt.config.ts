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
   ssr: true,

  app: {
    head: {
      title: 'Sana Fiaz | Software Engineer (Laravel • Vue • CodeIgniter • React)',
      
      meta: [
        {
          name: 'description',
          content:
            'Backend-focused Software Engineer specialized in Laravel, CodeIgniter, Vue.js, React.js, REST APIs, MySQL and scalable web application architecture.'
        },

        {
          name: 'keywords',
          content:
            'Laravel Developer, Software Engineer, Vue.js Developer, CodeIgniter, REST API, MySQL, Full Stack Developer Pakistan'
        },

        // OpenGraph (LinkedIn / WhatsApp preview)
        {
          property: 'og:title',
          content: 'Sana Fiaz | Software Engineer Portfolio'
        },
        {
          property: 'og:description',
          content:
            'Laravel • CodeIgniter • Vue • React • APIs • MySQL | Software Engineer building scalable web systems.'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: '/preview.png'
        },

        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  }
})
