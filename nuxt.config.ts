// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  // modules: ["@nuxt/ui", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],
  modules: ["@nuxt/ui", '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: [
    '@/assets/css/main.css',
  ],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons'],
    primary: 'green',
    gray: 'cool',
    button: {
      default: {
        size: 'md',
        color: 'gray',
        variant: 'ghost'
      }
    },
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 right-0'
    }
  } as any,
  $production: {
    routeRules: {
      // '/**': { isr: true }
    },
  },
  $development: {
    //
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
    secretKey: process.env.NUXT_SECRET_KEY,
    dbUrl: process.env.NUXT_DATABASEURL,
    user: process.env.NUXT_DBNAME,
    pass: process.env.NUXT_DBUSERNAME,
    authSource: process.env.NUXT_AUTHSOURCE,
    tokenSecret: process.env.NUXT_TOKEN_SECRET,
    tokenExpiration: process.env.NUXT_TOKEN_EXPIRATION,
  },
});
