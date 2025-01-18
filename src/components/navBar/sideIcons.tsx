import type { IconType } from "react-icons";

interface SideIcons {
	isSelected?: boolean;
	className?: string;
	icon: IconType;
}

const SideIcons = ({ isSelected, icon: Icon, className }: SideIcons) => {
	const opacityBackground = isSelected ? "opacity-100" : "opacity-80";

	return (
		<button
			type="button"
			className={`group flex items-center gap-2 ${className}`}
			disabled={isSelected}
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
	);
};

export default SideIcons;
