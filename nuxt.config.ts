// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  app: {
    head: {
      title: "Gecko Web Labs - Agile Web Development",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Crafting agile, innovative websites with human-crafted code and AI efficiency.",
        },
        {
          name: "keywords",
          content: "web development, nuxt, supabase, agile, gecko web labs",
        },
        { name: "author", content: "Quantoxt" },
        {
          property: "og:title",
          content: "Gecko Web Labs - Agile Web Development",
        },
        {
          property: "og:description",
          content:
            "Crafting agile, innovative websites with human-crafted code and AI efficiency.",
        },
        { property: "og:image", content: "/images/gecko-labs-banner.png" },
        { property: "og:url", content: "https://www.geckoweblabs.com" },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&family=Lato:wght@400;700&display=swap' ",
        },
      ],
    },
  },

  css: ["~/styles/default.css", "~/styles/custom.css"],
});