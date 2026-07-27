import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/config/site.ts";

export default defineConfig({
  site: siteConfig.siteUrl,

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
