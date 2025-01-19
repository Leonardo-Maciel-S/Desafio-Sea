// Components
import SpaceBetweenCards from "./SpaceBetweenCards";
import StageCards from "./StageCards";
import type { RootState } from "../../store";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectActualStage } from "../../slices/stages";

const StagesModal = () => {
	const { stages, actualStage, completedFirstStage } = useSelector(
		(state: RootState) => state.stages,
	);
	const dispatch = useDispatch();

	return (
		<nav className="w-full min-h-[156px] pt-2 flex items-center justify-start px-6 sm:pr-16 bg-white rounded-[20px] flex-wrap">
			<StageCards
				stageCard={1}
				isCompleted={completedFirstStage}
				actualStage={actualStage}
				completedFirstStage={completedFirstStage}
				onClick={() => dispatch(selectActualStage(1))}
			/>
			<SpaceBetweenCards />

			{stages.map((item) => {
				if (item < stages.length + 1) {
					return (
						<>
							<StageCards
								stageCard={item}
								isCompleted={actualStage > item}
								actualStage={actualStage}
								completedFirstStage={completedFirstStage}
								onClick={() => dispatch(selectActualStage(item))}
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
						completedFirstStage={completedFirstStage}
						onClick={() => dispatch(selectActualStage(item))}
					/>
				);
			})}
		</nav>
	);
};

export default StagesModal;
