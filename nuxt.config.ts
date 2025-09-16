export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-lucide-icons', '@nuxt/image'],
  i18n: {
    lazy: true,
    strategy: 'prefix',
    defaultLocale: 'pt',
    locales: [
      { iso: 'pt-BR', code: 'pt', name: 'Português', file: 'pt-BR.js' },
      { iso: 'en-US', code: 'en', name: 'English', file: 'en-US.js' },
      { iso: 'es-ES', code: 'es', name: 'Spanish', file: 'es-ES.js' }
    ]
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/gb.png'
        }
      ],
      title: 'Gabriel Augusto'
    }
  },
})