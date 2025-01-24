// Components
import SpaceBetweenCards from "./SpaceBetweenCards";
import StageCards from "./StageCards";
import type { AppDispatch, RootState } from "../../store";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { completeFirstStage, selectActualStage } from "../../slices/stages";
import {
	setIsEditEmployeeModalOpen,
	setIsNewEmployeeModalOpen,
} from "../../slices/employees";

const StagesModal = () => {
	const { stages, actualStage, completedFirstStage } = useSelector(
		(state: RootState) => state.stages,
	);

	const { isNewEmployeeModalOpen, isEditEmployeeModalOpen } = useSelector(
		(state: RootState) => state.employees,
	);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<nav className="w-full min-h-[156px] flex items-center justify-start pt-2 px-6 sm:pr-16 bg-white rounded-[20px] flex-wrap  ">
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
								onClick={() => {
									if (isNewEmployeeModalOpen || isEditEmployeeModalOpen) {
										dispatch(setIsNewEmployeeModalOpen(false));
										dispatch(setIsEditEmployeeModalOpen(false));
										dispatch(completeFirstStage());
									}
									dispatch(selectActualStage(item));
								}}
							/>
							<SpaceBetweenCards />
						</>
					);
				}
			})}
			<StageCards
				stageCard={9}
				isCompleted={actualStage > 9}
				actualStage={actualStage}
				completedFirstStage={completedFirstStage}
				onClick={() => {
					if (isNewEmployeeModalOpen || isEditEmployeeModalOpen) {
						dispatch(setIsNewEmployeeModalOpen(false));
						dispatch(setIsEditEmployeeModalOpen(false));
						dispatch(completeFirstStage());
					}
					dispatch(selectActualStage(9));
				}}
			/>
		</nav>
	);
};

export default StagesModal;
