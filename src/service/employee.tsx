import { api } from "../axios/api";

const getAllEmployee = async () => {
	try {
		const response = await api.get("/");
		return response.data;
	} catch (e) {}
};

export const employeeService = {
	getAllEmployee,
};
