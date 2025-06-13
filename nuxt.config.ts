export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-lucide-icons'
  ],
  i18n: {
    lazy: true,
    strategy: 'prefix',
    defaultLocale: 'pt-BR',
    locales: [
      { code: 'pt-BR', name: 'Português', file: 'pt-BR.js' },
      { code: 'en-US', name: 'English', file: 'en-US.js' },
      { code: 'es-ES', name: 'Spanish', file: 'es-ES.js' }
    ]
  }
})