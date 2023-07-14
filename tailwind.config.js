/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				darkModePrimary: "#1A202C",
				darkModeWhite: "#EDF2F7",
				darkModeSecondary: "#2D3748",
				textColor: "#A0AEC0",
			},
		},
		fontFamily: {
			serif: ["Playfair Display"],
		},
	},
	plugins: [],
};
