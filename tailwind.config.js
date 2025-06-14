/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Rubik", "sans-serif"],
			},
			colors: {
				'red': {
					500: '#ef4444', // Custom red to match original design
				}
			}
		},
	},
	plugins: [],
};
