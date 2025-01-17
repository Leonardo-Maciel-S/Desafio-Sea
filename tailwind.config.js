/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				default: "#4fa1c2",
				sideIcons: "#FFFFFF opacity-80",
			},
			textColor: {
				iconSide: "#4fa1c2",
			},
			width: {
				iconSide: "19px",
			},
			height: {
				iconSide: "22px",
			},
		},
	},
	plugins: [],
};
