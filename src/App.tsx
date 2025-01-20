import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import backgroundImg from "./assets/backgroundImg.svg";
import NavBar from "./components/navBar/NavBar";
import EmployeesPage from "./pages/EmployeesPage";
import ComingSoon from "./pages/ComingSoon";

function App() {
	return (
		<>
			<BrowserRouter>
				<main className="z-10 xl:pr-10 w-screen min-h-full overflow-x-hidden">
					<NavBar />
					<div className="pl-24 h-max flex flex-col">
						<Routes>
							<Route path="/home" element={<ComingSoon />} />
							<Route path="/employees" element={<EmployeesPage />} />
							<Route path="/network" element={<ComingSoon />} />
							<Route path="/notifications" element={<ComingSoon />} />
							<Route path="/reload" element={<ComingSoon />} />
							<Route path="/user" element={<ComingSoon />} />
							<Route path="*" element={<Navigate to={"/employees"} />} />
						</Routes>
					</div>
					<div className="absolute -bottom-14 -right-14 w-[457px] -z-10">
						<img src={backgroundImg} alt="" />
					</div>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
