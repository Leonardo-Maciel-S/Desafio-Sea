import type { IconType } from "react-icons";
import type { AppDispatch, RootState } from "../../store";

import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "../../slices/pages";
import { Link } from "react-router";
import { completeFirstStage, selectActualStage } from "../../slices/stages";
import { setIsNewEmployeeModalOpen } from "../../slices/employees";

interface SideIcons {
	name: string;
	className?: string;
	icon: IconType;
	img?: string;
}

const SideIcons = ({ name, icon: Icon, className, img }: SideIcons) => {
	const { actualPage } = useSelector((state: RootState) => state.pages);
	const { completedFirstStage } = useSelector(
		(state: RootState) => state.stages,
	);

	const dispatch = useDispatch<AppDispatch>();

	const isSelected = actualPage === name;

	const opacityBackground = isSelected ? "opacity-100" : "opacity-80";

	return (
		<Link to={`/${name}`}>
			<button
				type="button"
				className={`group flex items-center gap-2 ${className}`}
				onClick={() => {
					if (name === "employees" && completedFirstStage) {
						dispatch(completeFirstStage());
					}
					dispatch(setIsNewEmployeeModalOpen(false));
					dispatch(selectPage(name));
				}}
			>
				<div
					className={`w-1 h-8 group-hover:bg-white ${isSelected ? "bg-white" : "bg-transparent"}`}
				/>

				<div
					className={`flex items-center justify-center size-8 rounded-[10px] text-defaultBlue cursor-pointer ${opacityBackground} bg-white hover:opacity-100`}
				>
					{img ? (
						<img src={img} alt="" width={23} />
					) : (
						<Icon className="text-xl" />
					)}
				</div>
			</button>
		</Link>
	);
};

export default SideIcons;
