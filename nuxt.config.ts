// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],

  

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  compatibilityDate: "2024-11-27",
});
