export default defineNuxtConfig({
  css: ["assets/scss/reset.scss"],
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/common.scss";',
        },
      },
    },
  },
  modules: ["dayjs-nuxt"],
  plugins: [{ src: "~/plugins/firebase.client.js", ssr: false }],
});
