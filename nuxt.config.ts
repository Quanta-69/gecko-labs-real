// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],

  shadcn: {
    /**
     * Prefix for all the generated components.
     * @default "U"
     */
    componentPrefix: 'G',

    /**
     * Directory that will be scanned to look for components.
     * @default "./components/ui"
     */
    componentsDir: './components/ui',

    /**
     * Style layer to use for the components.
     * @default "base"
     */
    style: 'new-york', // Or 'default', 'windy'

    /**
     * List of components to be included. Accepts glob patterns.
     * @default []
     */
    components: [
      'Button',
      'Input',
      'Card',
      'Avatar',
      // Add other components you plan to use
    ],

    /**
     * List of utilities to be included. Accepts glob patterns.
     * @default []
     */
    utils: [],
  },

  app: {
    head: {
      title: "Gecko Web Labs - AI Precision. Human Touch. Perfect Websites",
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
        { property: "og:image", content: "/static/hero.jpg" },
        { property: "og:url", content: "https://www.geckoweblabs.com" },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          /*           href: "rel: 'stylesheet', href: '' ",
           */
        },
      ],
    },
  },

  css: ["~/styles/default.css", "~/styles/custom.css"],
  routeRules: {
    "/auth/**": { ssr: false }, // Client-side only
  },
});