import SideIcons from "./sideIcons";

import {
	FaRegBell,
	FaBuilding,
	FaEdit,
	FaRegFileAlt,
	FaNetworkWired,
	FaUser,
} from "react-icons/fa";

const NavBar = () => {
	return (
		<nav className="w-14 h-[100vh] bg-default rounded-e-2xl flex flex-col justify-center">
			<div className="w-14 h-[41px] bg-white absolute top-[50px]" />

			<div className="w-11  bg-transparent flex flex-col gap-6 ">
				<SideIcons icon={FaBuilding} />
				<SideIcons isSelected icon={FaEdit} />
				<SideIcons icon={FaNetworkWired} />
				<div className="relative">
					<SideIcons icon={FaRegBell} />
					<div className="absolute -right-2 -bottom-3 w-5 h-5 bg-white rounded-[10px] flex justify-center items-center">
						<FaRegFileAlt className="text-iconSide text-xs " />
					</div>
				</div>
				<SideIcons icon={FaBuilding} />
				<SideIcons icon={FaUser} />
			</div>
		</nav>
	);
};

export default NavBar;
