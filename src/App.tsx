import backgroundImg from "./assets/backgroundImg.svg";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import StagesModal from "./components/stages/StagesModal";

function App() {
	return (
		<>
			<main className="flex items-center gap-10">
				<NavBar />
				<div className="flex flex-col h-screen pt-5 gap-10 flex-1 pr-10">
					<StagesModal />
					<Profile/>
				</div>
			</main>

			<div className="fixed -bottom-14 -right-14 w-[457px]">
				<img src={backgroundImg} alt="" />
			</div>
		</>
	);
}

export default App;
