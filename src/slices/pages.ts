import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Pages {
	actualPage: string;
}

const initialState: Pages = {
	actualPage: "",
};

const pagesSlice = createSlice({
	name: "pages",
	initialState,
	reducers: {
		selectPage: (state: Pages, action: PayloadAction<string>) => {
			if (action.payload.includes("home")) {
				state.actualPage = "home";
			}

			if (action.payload.includes("employees") || action.payload === "/") {
				state.actualPage = "employees";
			}

			if (action.payload.includes("network")) {
				state.actualPage = "network";
			}

			if (action.payload.includes("notifications")) {
				state.actualPage = "notifications";
			}

			if (action.payload.includes("reload")) {
				state.actualPage = "reload";
			}

			if (action.payload.includes("user")) {
				state.actualPage = "user";
			}
		},
	},
});

export const { selectPage } = pagesSlice.actions;
export const pagesSliceReducer = pagesSlice.reducer;
