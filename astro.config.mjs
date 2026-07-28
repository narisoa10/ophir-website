import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/config/site.ts";

export default defineConfig({
  site: siteConfig.siteUrl,

  integrations: [
    sitemap({
      filter: (page) => page !== new URL("/", siteConfig.siteUrl).toString(),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["en", "fr", "ru"],
    defaultLocale: "en",

    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
