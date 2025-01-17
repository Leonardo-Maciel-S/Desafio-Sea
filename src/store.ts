import { configureStore } from "@reduxjs/toolkit";
import { stagesSliceReducer } from "./slices/stages";

export const store = configureStore({
	reducer: {
		stages: stagesSliceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
