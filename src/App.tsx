import backgroundImg from "../public/backgroundImg.svg";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<main className="flex items-center gap-10">
				<NavBar />
				<h1 className="">Hello World</h1>
			</main>

			<div className="absolute -bottom-14 -right-14 w-[457px]">
				<img src={backgroundImg} alt="" />
			</div>
		</>
	);
}

export default App;
