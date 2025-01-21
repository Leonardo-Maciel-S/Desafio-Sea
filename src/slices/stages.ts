import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Stages {
	stages: number[];
	actualStage: number;
	completedFirstStage: boolean;
}

const initialState: Stages = {
	stages: [2, 3, 4, 5, 6, 7, 8, 9],
	actualStage: 1,
	completedFirstStage: false,
};

export const stagesSlice = createSlice({
	name: "stage",
	initialState,
	reducers: {
		nextStage: (state: Stages) => {
			if (state.actualStage >= 1 && state.actualStage < 9) {
				state.actualStage += 1;
			}

			if (state.actualStage === 2) {
				state.completedFirstStage = true;
			}
		},
		previousStage: (state: Stages) => {
			if (state.actualStage >= 1 && state.actualStage <= 9) {
				state.actualStage -= 1;
			}

			if (state.actualStage === 1) {
				state.actualStage = 1;
				state.completedFirstStage = false;
			}
		},
		selectActualStage: (state: Stages, action: PayloadAction<number>) => {
			if (action.payload === 1) {
				state.actualStage = 1;
				state.completedFirstStage = false;
			}

			if (state.actualStage >= 1 && state.actualStage <= 9) {
				state.actualStage = action.payload;
			}
		},
		completeFirstStage: (state: Stages) => {
			if (state.completedFirstStage) {
				state.completedFirstStage = false;
				state.actualStage = 1;

				return;
			}

			state.completedFirstStage = true;
			state.actualStage = 1;
		},
	},
});

export const {
	previousStage,
	nextStage,
	selectActualStage,
	completeFirstStage,
} = stagesSlice.actions;

export const stagesSliceReducer = stagesSlice.reducer;
