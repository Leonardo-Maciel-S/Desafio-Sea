import Employees from "../components/employees/Employees";
import Profile from "../components/profile/Profile";
import StagesModal from "../components/stages/StagesModal";

const EmployeesPage = () => {
	return (
		<div className="flex flex-col h-screen pt-5 gap-10 flex-1 ">
			<StagesModal />
			<div className="flex items-start gap-10">
				<Profile />
				<Employees />
			</div>
		</div>
	);
};

export default EmployeesPage;
