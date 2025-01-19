import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Pages {
	actualPage: string;
}

const initialState: Pages = {
	actualPage: "employees",
};

const pagesSlice = createSlice({
	name: "pages",
	initialState,
	reducers: {
		selectPage: (state: Pages, action: PayloadAction<string>) => {
			state.actualPage = action.payload;
		},
	},
});

export const { selectPage } = pagesSlice.actions;
export const pagesSliceReducer = pagesSlice.reducer;
