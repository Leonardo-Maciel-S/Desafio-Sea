import { useState } from "react";
import SpaceBetweenCards from "./SpaceBetweenCards";
import StageCards from "./StageCards";

const StagesModal = () => {
	const stages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const maxStage = 1;
	const [actualStage, setActualPage] = useState(1);

	return (
		<nav className="w-full min-h-[156px] pt-2 flex items-center justify-center px-6 bg-white rounded-[20px]">
			{stages.map((item) => {
				if (item < stages.length) {
					return (
						<>
							<StageCards
								stageCard={item}
								isCompleted={actualStage > item}
								actualStage={actualStage}
								maxStage={maxStage}
								changeActualStage={setActualPage}
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
						maxStage={maxStage}
						changeActualStage={setActualPage}
					/>
				);
			})}
		</nav>
	);
};

export default StagesModal;
