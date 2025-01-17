/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				default: "#4fa1c2",
				sideIcons: "#FFFFFF opacity-80",
				stageDisabled: "#DBDBDB",
			},

			textColor: {
				iconSide: "#4fa1c2",
				mediumGray: "#959595",
			},

			width: {
				iconSide: "19px",
			},
			height: {
				iconSide: "22px",
			},

			borderColor: {
				defaultBlue: "#4fa1c2",
			},

			boxShadow: {
				stagesCards: "0px 6px 8px #0000004d", // opacity 30
				stagesCardsHover: "0px 6px 8px #00000059", // opacity 35
			},
		},
	},
	plugins: [],
};
