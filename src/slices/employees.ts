import {
	createAsyncThunk,
	createSlice,
	type PayloadAction,
} from "@reduxjs/toolkit";
import { employeeService } from "../service/employees";
import type { Employee, EmployeesState, UseFormData } from "../types/employees";

const initialState: EmployeesState = {
	employeeToEdit: null,
	listOfEmployees: [],
	loading: false,
	isEditEmployeeModalOpen: false,
	isNewEmployeeModalOpen: false,
};

export const getAllEmployee = createAsyncThunk(
	"employees/getAllEmployee",
	async () => {
		try {
			const response = await employeeService.getAllEmployee();
			return response;
		} catch (error) {
			console.log(error);
		}
	},
);

export const getEmployeeById = createAsyncThunk(
	"employee/getEmployeeById",
	async (id: string, thunkAPI) => {
		try {
			const response = await employeeService.getEmployeeById(id);
			return response;
		} catch (error) {
			console.log(error);
			thunkAPI.rejectWithValue("e");
		}
	},
);

export const addAnEmployee = createAsyncThunk(
	"employee/addAnEmployee",
	async (data: UseFormData, thunkAPI) => {
		try {
			const response = await employeeService.addAnEmployee(data);
			return response;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(
				"Algo deu errado, tente novamente mais tarde",
			);
		}
	},
);

export const putAnEmployee = createAsyncThunk(
	"employee/putAnEmployee",
	async (data: UseFormData, thunkAPI) => {
		try {
			const response = await employeeService.putAnEmployee(data);

			return response;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(
				"Algo deu errado, tente novamente mais tarde",
			);
		}
	},
);

export const deleteAnEmployee = createAsyncThunk(
	"employee/deleteAnEmployee",
	async (id: string, thunkAPI) => {
		try {
			const response = await employeeService.deleteAnEmployee(id);

			return response;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(
				"Algo deu errado, tente novamente mais tarde",
			);
		}
	},
);

const employeesSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		setIsNewEmployeeModalOpen: (
			state: EmployeesState,
			action: PayloadAction<boolean>,
		) => {
			state.isNewEmployeeModalOpen = action.payload;
		},

		setIsEditEmployeeModalOpen: (
			state: EmployeesState,
			action: PayloadAction<boolean>,
		) => {
			state.isEditEmployeeModalOpen = action.payload;
			state.employeeToEdit = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllEmployee.pending, (state) => {
				state.loading = true;
			})
			.addCase(getAllEmployee.fulfilled, (state, action) => {
				state.loading = false;
				state.listOfEmployees = action.payload;
			})
			.addCase(getAllEmployee.rejected, (state) => {
				state.loading = false;
			})
			.addCase(addAnEmployee.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				addAnEmployee.fulfilled,
				(state, action: PayloadAction<Employee>) => {
					state.loading = false;
					state.listOfEmployees = [...state.listOfEmployees, action.payload];
					state.isNewEmployeeModalOpen = false;
				},
			)
			.addCase(addAnEmployee.rejected, (state) => {
				state.loading = false;
			})
			.addCase(deleteAnEmployee.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				deleteAnEmployee.fulfilled,
				(state, action: PayloadAction<Employee>) => {
					state.loading = false;
					state.listOfEmployees = state.listOfEmployees.filter((employee) => {
						return employee.id !== action.payload.id;
					});
				},
			)
			.addCase(deleteAnEmployee.rejected, (state) => {
				state.loading = false;
			})
			.addCase(getEmployeeById.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				getEmployeeById.fulfilled,
				(state, action: PayloadAction<Employee>) => {
					state.loading = false;
					state.employeeToEdit = action.payload;
				},
			)
			.addCase(getEmployeeById.rejected, (state) => {
				state.loading = false;
			})
			.addCase(putAnEmployee.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				putAnEmployee.fulfilled,
				(state, action: PayloadAction<Employee>) => {
					state.loading = false;
					state.employeeToEdit = null;
					state.isEditEmployeeModalOpen = false;

					state.listOfEmployees = state.listOfEmployees.filter((employee) => {
						return employee.id !== action.payload.id;
					});

					state.listOfEmployees = [
						...state.listOfEmployees,
						action.payload,
					].reverse();
				},
			)
			.addCase(putAnEmployee.rejected, (state) => {
				state.loading = false;
			});
	},
});

export const { setIsEditEmployeeModalOpen, setIsNewEmployeeModalOpen } =
	employeesSlice.actions;
export const employeesSliceReducer = employeesSlice.reducer;

export type SliceDispatch = typeof employeesSlice.actions;
