import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Jost Variable', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			fontFamily: {
				ibarra: ['Ibarra Real Nova Variable', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#EBA552',
				light: '#F8F5F1',
				dark: '#1F261E',
			}
		},
	},
	plugins: [],
}
