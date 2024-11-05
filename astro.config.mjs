import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://imm-estepario.github.io',
  base: 'mv-smart',

  integrations: [tailwind(), compress(),]
});