import type { IconType } from "react-icons";
import type { RootState } from "../../store";

import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "../../slices/pages";
import { Link } from "react-router";
import { selectActualStage } from "../../slices/stages";

interface SideIcons {
	name: string;
	className?: string;
	icon: IconType;
}

const SideIcons = ({ name, icon: Icon, className }: SideIcons) => {
	const { actualPage } = useSelector((state: RootState) => state.pages);

	const dispatch = useDispatch();

	const isSelected = actualPage === name;

	const opacityBackground = isSelected ? "opacity-100" : "opacity-80";

	return (
		<Link to={`/${name}`}>
			<button
				type="button"
				className={`group flex items-center gap-2 ${className}`}
				disabled={isSelected}
				onClick={() => {
					if (name !== "employees") {
						dispatch(selectActualStage(1));
					}
					dispatch(selectPage(name));
				}}
			>
				<div
					className={`w-1 h-8 group-hover:bg-white ${isSelected ? "bg-white" : "bg-transparent"}`}
				/>

				<div
					className={`flex items-center justify-center size-8 rounded-[10px] text-defaultBlue cursor-pointer ${opacityBackground} bg-white hover:opacity-100`}
				>
					<Icon className="text-xl" />
				</div>
			</button>
		</Link>
	);
};

export default SideIcons;
