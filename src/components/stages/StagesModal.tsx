import SpaceBetweenCards from "./SpaceBetweenCards";
import StageCards from "./StageCards";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const StagesModal = () => {
	const { stages, actualStage } = useSelector(
		(state: RootState) => state.stages,
	);

	return (
		<nav className="w-full min-h-[156px] pt-2 flex items-center justify-start px-6 sm:pr-16 bg-white rounded-[20px] flex-wrap">
			{stages.map((item) => {
				if (item < stages.length) {
					return (
						<>
							<StageCards
								stageCard={item}
								isCompleted={actualStage > item}
								actualStage={actualStage}
							/>
							<SpaceBetweenCards />
						</>
					);
				}

				return (
					<StageCards
						key={item}
						stageCard={item}
						isCompleted={actualStage > item}
						actualStage={actualStage}
					/>
				);
			})}
		</nav>
	);
};

export default StagesModal;
