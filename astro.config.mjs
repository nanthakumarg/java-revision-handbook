// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightScrollToTop from 'starlight-scroll-to-top'


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightScrollToTop()],
			title: 'Java Revision Handbook',
			logo: {
				src: './src/assets/handbook.svg',
			},
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			/*sidebar: [
				{
					label: 'Basics',
					autogenerate: { directory: 'basics' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],*/
		}),
	],
});
