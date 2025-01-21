import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import type { HtmlHTMLAttributes } from "react";

interface SwitchProps extends HtmlHTMLAttributes<HTMLButtonElement> {
	on: string;
	off: string;
	active?: boolean;
}

const Switch = ({ on, off, active, ...rest }: SwitchProps) => {
	const { completedFirstStage } = useSelector(
		(state: RootState) => state.stages,
	);

	const dispatch = useDispatch();

	const enableSpan2 =
		completedFirstStage || active ? "flex-row-reverse pl-2" : "flex-row pr-2";

	const text = completedFirstStage || active ? on : off;

	return (
		<div className={`${on === "Ativo" ? "w-20" : "w-16"} flex justify-end`}>
			<button
				type="button"
				className={`px-1 py-[2px] bg-stageDisabled  flex items-center gap-1 transition-all ease-linear rounded-full relative min-w-max ${enableSpan2}`}
				{...rest}
			>
				<div
					className={`size-4 bg-blueActive rounded-full transition-transform delay-0`}
				/>
				<span className={`transition-all delay-0 font-thin text-xs`}>
					{text}
				</span>
			</button>
		</div>
	);
};
export default Switch;
