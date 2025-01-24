import { api } from "../axios/api";
import type { UseFormData } from "../types/employees";

const getAllEmployee = async () => {
	try {
		const response = await api.get("/");
		return response.data;
	} catch (e) {
		console.log(e);
	}
};

const getEmployeeById = async (id: string) => {
	try {
		const response = await api.get(`/${id}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

const addAnEmployee = async (data: UseFormData) => {
	try {
		const response = await api.post("/", data);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

const putAnEmployee = async (data: UseFormData) => {
	try {
		const response = await api.put(`/${data.id}`, data);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};
const deleteAnEmployee = async (id: string) => {
	try {
		const response = await api.delete(`/${id}`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};

export const employeeService = {
	getAllEmployee,
	addAnEmployee,
	deleteAnEmployee,
	getEmployeeById,
	putAnEmployee,
};

export type EmployeeServiceType = typeof employeeService;
