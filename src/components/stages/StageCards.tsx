import { FaBuilding } from "react-icons/fa";

import { tv } from "tailwind-variants";
import type { ButtonHTMLAttributes } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const stageCards = tv({
	base: "size-14 text-white flex justify-center items-center rounded-[20px] shadow-stagesCards",
	variants: {
		active: {
			default:
				"bg-default hover:border-2 hover:border-black hover:shadow-stagesCardsHover cursor-pointer ",
			disabled: "bg-stageDisabled cursor-default",
		},
		isActualStage: {
			true: "border-2 cursor-default shadow-stagesCards border-black hover:shadow-stagesCards",
		},
	},
	defaultVariants: {
		active: "default",
		isActualStage: false,
	},
});

interface StageCardsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	stageCard: number;
	isCompleted?: boolean;
	actualStage: number;
	completedFirstStage: boolean;
}

const StageCards = ({
	stageCard,
	isCompleted,
	actualStage,
	completedFirstStage,
	...rest
}: StageCardsProps) => {
	const { isNewEmployeeModalOpen } = useSelector(
		(state: RootState) => state.employees,
	);

	const backgroundCard =
		stageCard === 1 ||
		actualStage > 1 ||
		completedFirstStage ||
		isNewEmployeeModalOpen
			? "default"
			: "disabled";

	const textStage =
		stageCard === 1 || isNewEmployeeModalOpen
			? "text-defaultBlue"
			: "text-mediumGray";

	const hasBorder = actualStage === stageCard;

	return (
		<div className="flex flex-col items-center gap-2 h-[130px] ">
			<button
				type="button"
				className={stageCards({
					active: backgroundCard,
					isActualStage: hasBorder,
				})}
				disabled={!completedFirstStage || actualStage === stageCard}
				{...rest}
			>
				<FaBuilding className="text-2xl" />
			</button>

			<div className="flex flex-col items-center text-center font-medium text-xs">
				<span className={textStage}>item {stageCard}</span>
				{isCompleted && <span>Concluído</span>}
			</div>
		</div>
	);
};

export default StageCards;
