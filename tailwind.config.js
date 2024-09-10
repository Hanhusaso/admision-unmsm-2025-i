/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				openSans: ['var(--font-open-sans)'],
			},
			colors: {
				primary: {
					DEFAULT: "var(--primary)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
				},
				tertiary: {
					DEFAULT: "var(--tertiary)",
				},
				gray: {
					DEFAULT: "var(--gray)",
				},
			},
		},
	},
	plugins: [],
};
