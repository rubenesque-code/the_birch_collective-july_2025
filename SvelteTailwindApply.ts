import type { Plugin } from 'vite';

export default async function SvelteTailwindApply(): Promise<Plugin> {
	return {
		name: 'svelte-tailwind-apply',
		api: {
			sveltePreprocess: {
				style: async ({ content, filename }: { content: any; filename: any }) => {
					if (filename.endsWith('.svelte')) {
						const newContent = `@import "@app-css" reference;\n${content}`;
						return { code: newContent };
					}
					return { code: content };
				}
			}
		}
	};
}
