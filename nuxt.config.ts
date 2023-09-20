// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@pinia/nuxt"],

  pinia: {
    autoImports: ["defineStore"],
  },

  imports: { dirs: ["stores"] },

  routeRules: {
    "/login": { ssr: false },
    "/user": { ssr: false },
  },
});
