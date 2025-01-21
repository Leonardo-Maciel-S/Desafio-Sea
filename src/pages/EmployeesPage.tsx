import Employees from "../components/employees/Employees";
import Profile from "../components/profile/Profile";
import StagesModal from "../components/stages/StagesModal";
import NewEmployee from "../components/employees/NewEmployee";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

const EmployeesPage = () => {
	const { isNewEmployeeModalOpen } = useSelector(
		(state: RootState) => state.employees,
	);

	return (
		<div className="flex flex-col h-screen pt-5 gap-8 flex-1 ">
			<StagesModal />
			<div className="flex items-start gap-10">
				<Profile />
				{!isNewEmployeeModalOpen && <Employees />}
				{isNewEmployeeModalOpen && <NewEmployee />}
			</div>
		</div>
	);
};

export default EmployeesPage;
