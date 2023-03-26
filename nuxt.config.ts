// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@vueuse/nuxt'],
  css: ['element-plus/dist/index.css', 'element-plus/theme-chalk/dark/css-vars.css', '@/assets/global.css'],
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        class: ['dark'],
      },
      title: 'Wedding',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0',
        },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'page',
      mode: 'out-in',
    }
  },
})
