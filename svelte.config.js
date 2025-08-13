import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		alias: {
			'^actions': 'src/lib/actions',

			'^assets': 'src/lib/assets',

			'^components': 'src/lib/components',

			'^config': 'src/lib/config',

			'^constants': 'src/lib/constants',

			'^content': 'src/lib/content',

			'^data': 'src/lib/data',

			'^files': 'src/lib/assets/_files',

			'^helpers': 'src/lib/helpers',

			'^hooks': 'src/lib/hooks',

			'^lib': 'src/lib',

			'^pages/*': 'src/lib/components/~pages/*',

			'^pages': 'src/lib/components/~pages',

			'^sections': 'src/lib/~sections',

			'^services': 'src/lib/services',

			'^state': 'src/lib/state',

			'^structured-data-parts': 'src/lib/structured-data-parts',

			'^types': 'src/lib/types',

			'^utils': 'src/lib/utils'
		}
	}
};

export default config;
