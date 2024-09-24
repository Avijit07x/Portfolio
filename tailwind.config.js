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
				primary: "#ff3951",
			},
			keyframes: {
				fadeInAndSlideUp: {
					"0%": { opacity: 0, transform: "translateY(60px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
				fadeInOut: {
					"0%, 100%": { opacity: 0 },
					"50%": { opacity: 1 },
				},
				spinSlow: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				bounceSlow: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
				},
				bounceSlowFade: {
					"0%, 100%": { transform: "translateY(0)", opacity: 0 },
					"50%": { transform: "translateY(10px)", opacity: 1 },
				},
				fadeInAndSlideLeft: {
					"0%": { opacity: 0, transform: "translateX(100px)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
			},
			animation: {
				fadeInAndSlideUp: "fadeInAndSlideUp 0.7s ease-in-out 0.2s forwards",
				fadeInOut: "fadeInOut 6s ease-in-out infinite",
				spinSlow: "spinSlow 10s linear infinite",
				bounceSlow: "bounceSlow 3s ease-in-out infinite",
				bounceSlowFade: "bounceSlowFade 3s ease-in-out infinite",
				fadeInAndSlideLeft: "fadeInAndSlideLeft 0.7s ease-in-out 0.2s forwards",
			},
		},
	},
	plugins: [],
};
