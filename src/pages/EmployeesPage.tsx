import Employees from "../components/employees/Employees";
import Profile from "../components/profile/Profile";
import StagesModal from "../components/stages/StagesModal";
import NewEmployee from "../components/employees/NewEmployee";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type { AppDispatch, RootState } from "../store";

import { getAllEmployee } from "../slices/employees";
import NewEmployeeContextProvider from "../context/NewEmployeeContext";
import EditEmployee from "../components/employees/EditEmployee";
import EditEmployeeContextProvider from "../context/EditEmployeeContext";

const EmployeesPage = () => {
	const { isNewEmployeeModalOpen, isEditEmployeeModalOpen, loading } =
		useSelector((state: RootState) => state.employees);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getAllEmployee());
	}, []);

	return (
		<div className="flex flex-col h-screen pt-5 gap-8 flex-1  ">
			<StagesModal />
			<div className="flex flex-col items-start gap-10 pr-10 xl:p-0 xl:flex-row ">
				<Profile />

				{!isNewEmployeeModalOpen && !isEditEmployeeModalOpen && <Employees />}

				<NewEmployeeContextProvider>
					{isNewEmployeeModalOpen && <NewEmployee />}
				</NewEmployeeContextProvider>

				<EditEmployeeContextProvider>
					{isEditEmployeeModalOpen && !loading && <EditEmployee />}
				</EditEmployeeContextProvider>
			</div>
		</div>
	);
};

export default EmployeesPage;
