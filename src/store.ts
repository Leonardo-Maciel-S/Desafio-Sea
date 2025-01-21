import { configureStore } from "@reduxjs/toolkit";
import { stagesSliceReducer } from "./slices/stages";
import { pagesSliceReducer } from "./slices/pages";
import { employeesSliceReducer } from "./slices/employees";

export const store = configureStore({
	reducer: {
		stages: stagesSliceReducer,
		pages: pagesSliceReducer,
		employees: employeesSliceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
