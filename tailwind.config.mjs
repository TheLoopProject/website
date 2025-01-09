/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["DM Sans", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"generic-red": "#fa6f5a",
				"generic-orange": "#faa55a",
				"generic-yellow": "#fadd5a",
				"generic-green": "#9dfa5a",
				"generic-blue": "#5a95fa",
				"generic-purple": "#ba5afa",
				"generic-rose": "#fa5a87",

				"brand-colour": "#ff3424",

				"brand-background": "var(--brand-background)",
				"brand-background-secondary": "var(--brand-background-secondary)",
				"brand-background-blue": "var(--brand-background-blue)",
				"brand-background-transparent": "var(--brand-background-transparent)",
				"brand-scrollbar": "var(--brand-scrollbar)",
				"brand-border": "var(--brand-border)",
				"brand-border-alt": "var(--brand-border-alt)",
				"brand-text": "var(--brand-text)",
				"brand-text-secondary": "var(--brand-text-secondary)",
			},
		},
	},
	plugins: [],
};
