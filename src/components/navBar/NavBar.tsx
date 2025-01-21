import { useLocation } from "react-router";
import SideIcons from "./sideIcons";

import {
	FaRegBell,
	FaBuilding,
	FaEdit,
	FaRegFileAlt,
	FaNetworkWired,
	FaUser,
	FaUndo,
} from "react-icons/fa";
import { selectPage } from "../../slices/pages";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const NavBar = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(selectPage(location.pathname));
	}, []);

	return (
		<nav className="min-w-14 h-[100vh] bg-default rounded-e-2xl flex flex-col justify-center absolute	top-0 left-0">
			<div className="w-14 h-[41px] bg-white absolute top-[50px]" />

			<div className="w-11  bg-transparent flex flex-col gap-6 ">
				<SideIcons name="home" icon={FaBuilding} />
				<SideIcons name="employees" icon={FaEdit} />
				<SideIcons name="network" icon={FaNetworkWired} />
				<div className="relative">
					<SideIcons name="notifications" icon={FaRegBell} />
					<div className="absolute -right-2 -bottom-3 w-5 h-5 bg-white rounded-[10px] flex justify-center items-center">
						<FaRegFileAlt className="text-defaultBlue text-xs " />
					</div>
				</div>
				<SideIcons name="reload" icon={FaUndo} />
				<SideIcons name="user" icon={FaUser} />
			</div>
		</nav>
	);
};

export default NavBar;
