import { FaBuilding } from "react-icons/fa";

import { tv } from "tailwind-variants";

const stageCards = tv({
	base: "size-14 text-white flex justify-center items-center rounded-[20px] shadow-stagesCards cursor-pointer",
	variants: {
		active: {
			default: "bg-default hover:border-2 hover:border-black",
			disabled: "bg-stageDisabled cursor-default",
		},
	},
	defaultVariants: {
		active: "default",
	},
});

interface StageCardsProps {
	stageCard: number;
	isCompleted?: boolean;
	actualStage: number;
	maxStage: number;
	changeActualStage: (stageCard: number) => void;
}

const StageCards = ({
	stageCard,
	isCompleted,
	actualStage,
	changeActualStage,
}: StageCardsProps) => {
	const backgroundCard =
		stageCard === 1 || actualStage > 1 ? "default" : "disabled";

	const textStage =
		stageCard === 1 || actualStage > 1 ? "text-iconSide" : "text-mediumGray";

	return (
		<div className="flex flex-col items-center gap-2 h-[130px]">
			<button
				type="button"
				className={stageCards({ active: backgroundCard })}
				onClick={() => changeActualStage(stageCard)}
				disabled={actualStage < 2}
			>
				<FaBuilding className="text-2xl" />
			</button>

			<div className="flex flex-col items-center text-center font-medium text-xs">
				<span className={textStage}>item{stageCard}</span>
				{isCompleted && <span>Concluído</span>}
			</div>
		</div>
	);
};

export default StageCards;
