import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import backgroundImg from "./assets/backgroundImg.svg";
import NavBar from "./components/navBar/NavBar";
import EmployeesPage from "./pages/EmployeesPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import NextStage from "./pages/NextStage";

function App() {
	return (
		<>
			<BrowserRouter>
				<main className="relative z-10 xl:pr-10 w-screen overflow-hidden ">
					<NavBar />
					<div className="pl-24 h-max flex flex-col">
						<Routes>
							<Route path="/home" element={<ComingSoonPage />} />
							<Route path="/employees" element={<EmployeesPage />} />
							<Route path="/employees/:stagePath" element={<NextStage />} />

							<Route path="/network" element={<ComingSoonPage />} />
							<Route path="/notifications" element={<ComingSoonPage />} />
							<Route path="/reload" element={<ComingSoonPage />} />
							<Route path="/user" element={<ComingSoonPage />} />
							<Route path="*" element={<Navigate to={"/employees"} />} />
						</Routes>
					</div>
					<div className="absolute -bottom-14 -right-14 w-[457px] -z-20 overflow-hidden">
						<img src={backgroundImg} alt="background-img" />
					</div>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
