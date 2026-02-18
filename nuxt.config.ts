export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },

  css: [
    "~/assets/css/main.css",

    "bootstrap-icons/font/bootstrap-icons.css",

    "@fortawesome/fontawesome-free/css/all.min.css"
  ],
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8000/api",
    },
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Admin Website',
      titleTemplate: '%s  | RSUD Dr. Soetomo',

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico'
        }
      ],

      meta: [
        {
          name: 'description',
          content: 'Admin Website Resmi RSUD Dr. Soetomo'
        }
      ]
    }
  }
})
