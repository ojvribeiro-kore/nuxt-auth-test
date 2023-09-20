// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@pinia/nuxt", "nuxt-sanctum-auth"],

  pinia: {
    autoImports: ["defineStore"],
  },

  imports: { dirs: ["stores"] },

  routeRules: {
    "/account/**": { ssr: false },
    "/auth/**": { ssr: false },
  },

  nuxtSanctumAuth: {
    token: false, // set true to use jwt-token auth instead of cookie. default is false
    baseUrl: "http://localhost:8000",
    endpoints: {
      csrf: "/sanctum/csrf-cookie",
      login: "/login",
      logout: "/logout",
      user: "/api/user",
    },
    csrf: {
      headerKey: "X-XSRF-TOKEN",
      cookieKey: "XSRF-TOKEN",
      tokenCookieKey: "nuxt-sanctum-auth-token",
    },
    redirects: {
      home: "/",
      login: "/auth/login",
      logout: "/",
    },
  },
});
