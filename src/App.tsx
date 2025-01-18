import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import backgroundImg from "./assets/backgroundImg.svg";
import NavBar from "./components/navBar/NavBar";
import EmployeesPage from "./pages/EmployeesPage";

function App() {
	return (
		<>
			<main className="flex items-center gap-10">
				<NavBar />
				<BrowserRouter>
					<Routes>
						<Route path="/funcionarios" element={<EmployeesPage />} />
						<Route path="*" element={<Navigate to={"/funcionarios"} />} />
					</Routes>
				</BrowserRouter>
			</main>

			<div className="fixed -bottom-14 -right-14 w-[457px]">
				<img src={backgroundImg} alt="" />
			</div>
		</>
	);
}

export default App;
