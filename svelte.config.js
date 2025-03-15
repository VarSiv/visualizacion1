import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import path from 'path';


export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  kit: {
    // Specify the base path for GitHub Pages (repository name in the URL)
    paths: {
      base: '/visualizacion1', // Replace 'repository-name' with your GitHub repo name
    },
    // Other configurations here...
  },
  preprocess: vitePreprocess(),
}

