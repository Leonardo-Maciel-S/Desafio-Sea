import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Stages {
	stages: number[];
	actualStage: number;
}

const initialState: Stages = {
	stages: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	actualStage: 2,
};

export const stagesSlice = createSlice({
	name: "stage",
	initialState,
	reducers: {
		nextStage: (state: Stages) => {
			if (state.actualStage >= 1 || state.actualStage <= 9) {
				state.actualStage += 1;
			}
		},
		previousStage: (state: Stages) => {
			if (state.actualStage >= 1 || state.actualStage <= 9) {
				state.actualStage -= 1;
			}
		},
		selectActualStage: (state: Stages, action: PayloadAction<number>) => {
			if (state.actualStage >= 1 || state.actualStage <= 9) {
				state.actualStage = action.payload;
			}
		},
	},
});

export const { previousStage, nextStage, selectActualStage } =
	stagesSlice.actions;
export const stagesSliceReducer = stagesSlice.reducer;
