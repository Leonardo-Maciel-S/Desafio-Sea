import { configureStore } from "@reduxjs/toolkit";
import { stagesSliceReducer } from "./slices/stages";
import { pagesSliceReducer } from "./slices/pages";

export const store = configureStore({
	reducer: {
		stages: stagesSliceReducer,
		pages: pagesSliceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
