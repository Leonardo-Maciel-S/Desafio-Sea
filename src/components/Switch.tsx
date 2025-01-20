import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { completeFirstStage } from "../slices/stages";

interface SwitchProps {
	on: string;
	off: string;
}

const Switch = ({ on, off }: SwitchProps) => {
	const { completedFirstStage } = useSelector(
		(state: RootState) => state.stages,
	);

	const dispatch = useDispatch();

	const enableSpan = completedFirstStage ? "translate-x-6" : "-translate-x-1";

	const text = completedFirstStage ? on : off;

	return (
		<button
			type="button"
			onClick={() => dispatch(completeFirstStage())}
			className={`py-1 px-2 bg-stageDisabled  flex items-center gap-2 transition-all delay-300 ease-linear rounded-full animate-opacity relative w-[68px]`}
		>
			<span
				className={`transition-all delay-0 ${completedFirstStage ? "mr-4" : "ml-4"} font-thin text-xs`}
			>
				{text}
			</span>
			<div
				className={`size-4 absolute bg-blue-300 rounded-full transition-transform delay-0 ${enableSpan}`}
			/>
		</button>
	);
};
export default Switch;
