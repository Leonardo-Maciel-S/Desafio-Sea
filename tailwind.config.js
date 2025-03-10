/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				default: "#4fa1c2",
				sideIcons: "#FFFFFF opacity-80",
				stageDisabled: "#DBDBDB",
				blueSky: "#E0ECF2",
				mediumGray: "#959595",
				blueActive: "#649FBF",
			},

			textColor: {
				defaultBlue: "#4fa1c2",
				mediumGray: "#959595",
				darkGray: "#3A3A3A",
				dark: "#272F33",
			},

			width: {
				iconSide: "19px",
			},
			height: {
				iconSide: "22px",
			},

			borderColor: {
				defaultBlue: "#4fa1c2",
				mediumGray: "#959595",
				bgRadio: "#649FBF",
			},

			boxShadow: {
				stagesCards: "0px 6px 8px rgba(0, 0, 0, 0.3)",
				stagesCardsHover: "0px 6px 8px rgba(0, 0, 0, 0.4)",
				fieldset: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
				closeInfo: "0px 6px 8px rgba(0, 0, 0, 0.35)",
			},
			screens: {
				phone: "360px",
			},
			borderRadius: {
				default: "20px",
			},
			spacing: {
				teste: "40px",
			},

			keyframes: {
				onePulse: {
					"0%, 50%": { opacity: "0" },
					"51%, 100%": { opacity: "100" },
				},
			},

			animation: {
				onePulse: "onePulse 300ms ease-in",
			},
		},
	},
	plugins: [],
};
