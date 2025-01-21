import {
	createAsyncThunk,
	createSlice,
	type PayloadAction,
} from "@reduxjs/toolkit";
import { employeeService } from "../service/employee";

export interface Employee {
	id: number;
	active: boolean;
	name: string;
	cpf: string;
	RG: string;
	gender: string;
	birth: string;
	job: string;
	useEPI: [
		{
			activity: string;
			epi: string;
			ca: string;
		},
	];
	medicalCertificate: string;
}

interface Employees {
	employeeToEdit: object;
	listOfEmployees: Employee[];
	loading: boolean;
	isNewEmployeeModalOpen: boolean;
	isEditEmployeeModalOpen: boolean;
}

const initialState: Employees = {
	employeeToEdit: {},
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
		} catch (error) {}
	},
);

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
			});
	},
});

export const { setIsEditEmployeeModalOpen, setIsNewEmployeeModalOpen } =
	employeesSlice.actions;
export const employeesSliceReducer = employeesSlice.reducer;
