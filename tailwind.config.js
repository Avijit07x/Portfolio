/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#ef4e19",
			},
			keyframes: {
				"fade-up": {
					"0%": {
						opacity: 0,
						transform: "translateY(-60px)",
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0)",
					},
				},
			},
			animations: {
				"fade-up": "fade-up 0.5s ease-out",
			},
		},
	},
	plugins: [],
};
