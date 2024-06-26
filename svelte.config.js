import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        appDir: 'app', // Required as the default is _app
        adapter: adapter(),
        paths: {
			base: process.env.NODE_ENV === 'production' ? '/Uni-Portfolio' : '',
            // base: dev ? '' : process.env.BASE_PATH,
        },
		prerender: {
			handleHttpError: 'warn',
		}
    },
    preprocess: vitePreprocess()
};
export default config;
