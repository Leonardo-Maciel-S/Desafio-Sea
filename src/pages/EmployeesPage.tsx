import Employees from "../components/employees/Employees";
import Profile from "../components/profile/Profile";
import StagesModal from "../components/stages/StagesModal";
import NewEmployee from "../components/employees/NewEmployee";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type { AppDispatch, RootState } from "../store";

import { getAllEmployee } from "../slices/employees";
import NewEmployeeContextProvider from "../context/NewEmployeeContext";
import type { NewEmployeeSchema } from "../types/typesNewEmployee";
import { zodResolver } from "@hookform/resolvers/zod";

const EmployeesPage = () => {
	const { isNewEmployeeModalOpen } = useSelector(
		(state: RootState) => state.employees,
	);

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllEmployee());
	}, []);

	return (
		<div className="flex flex-col h-screen pt-5 gap-8 flex-1 ">
			<StagesModal />
			<div className="flex items-start gap-10">
				<Profile />

				{!isNewEmployeeModalOpen && <Employees />}

				<NewEmployeeContextProvider>
					{isNewEmployeeModalOpen && <NewEmployee />}
				</NewEmployeeContextProvider>
			</div>
		</div>
	);
};

export default EmployeesPage;
