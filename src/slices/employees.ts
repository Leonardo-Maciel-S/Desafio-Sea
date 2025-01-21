import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Employees {
	employeeToEdit: object;
	listOfEmployee: object;
	isNewEmployeeModalOpen: boolean;
	isEditEmployeeModalOpen: boolean;
}

const initialState: Employees = {
	employeeToEdit: {},
	listOfEmployee: {},
	isEditEmployeeModalOpen: false,
	isNewEmployeeModalOpen: false,
};

const employeesSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		setIsNewEmployeeModalOpen: (
			state: Employees,
			action: PayloadAction<boolean>,
		) => {
			state.isNewEmployeeModalOpen = action.payload;
		},

		setIsEditEmployeeModalOpen: (
			state: Employees,
			action: PayloadAction<boolean>,
		) => {
			state.isNewEmployeeModalOpen = action.payload;
		},
	},
});

export const { setIsEditEmployeeModalOpen, setIsNewEmployeeModalOpen } =
	employeesSlice.actions;
export const employeesSliceReducer = employeesSlice.reducer;
