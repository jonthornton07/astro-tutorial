import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://lively-hummingbird-fdca24.netlify.app/",
  integrations: [preact()]
});