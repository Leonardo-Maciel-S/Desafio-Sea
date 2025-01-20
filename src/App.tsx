import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import backgroundImg from "./assets/backgroundImg.svg";
import NavBar from "./components/navBar/NavBar";
import EmployeesPage from "./pages/EmployeesPage";
import ComingSoon from "./pages/ComingSoon";

function App() {
	return (
		<>
			<main className="flex items-center gap-10 z-10 pr-10">
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/home" element={<ComingSoon />} />
						<Route path="/employees" element={<EmployeesPage />} />
						<Route path="/network" element={<ComingSoon />} />
						<Route path="/notifications" element={<ComingSoon />} />
						<Route path="/reload" element={<ComingSoon />} />
						<Route path="/user" element={<ComingSoon />} />
						<Route path="*" element={<Navigate to={"/employees"} />} />
					</Routes>
				</BrowserRouter>
			</main>

			<div className="fixed -bottom-14 -right-14 w-[457px] -z-10">
				<img src={backgroundImg} alt="" />
			</div>
		</>
	);
}

export default App;
