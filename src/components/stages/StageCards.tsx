import { FaBuilding } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { tv } from "tailwind-variants";
import { selectActualStage } from "../../slices/stages";

const stageCards = tv({
	base: "size-14 text-white flex justify-center items-center rounded-[20px] shadow-stagesCards cursor-pointer border-black",
	variants: {
		active: {
			default: "bg-default hover:border-2 hover:border-black hover:shadow-stagesCardsHover",
			disabled: "bg-stageDisabled cursor-default",
		},
		isActualStage: {
			true: 'border-2 cursor-default shadow-stagesCards',
			false: 'hover:scale-105'
		}
	},
	defaultVariants: {
		active: "default",
		isActualStage: false
	},
});

interface StageCardsProps {
	stageCard: number;
	isCompleted?: boolean;
	actualStage: number;
}

const StageCards = ({
	stageCard,
	isCompleted,
	actualStage,
}: StageCardsProps) => {
	const dispatch = useDispatch();

	const backgroundCard =
		stageCard === 1 || actualStage > 1 ? "default" : "disabled";

	const textStage =
		stageCard === 1 || actualStage > 1 ? "text-iconSide" : "text-mediumGray";

	const hasBorder = actualStage === stageCard 

	return (
		<div className="flex flex-col items-center gap-2 h-[130px] ">
			<button
				type="button"
				className={stageCards({ active: backgroundCard, isActualStage: hasBorder})}
				onClick={() => dispatch(selectActualStage(stageCard))}
				disabled={actualStage < 2 || actualStage == stageCard}
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
