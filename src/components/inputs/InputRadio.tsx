import { useState } from "react";

const InputRadio = () => {
	const [selected, isSelected] = useState(false);
	const [selected2, isSelected2] = useState(false);

	const handleClick = (gender: string): void => {
		if (gender === "female") {
			isSelected(true);
			isSelected2(false);
			return;
		}
		isSelected(false);
		isSelected2(true);
	};

	return (
		<div className="flex gap-2 items-center h-8">
			<button
				type="button"
				onClick={() => handleClick("female")}
				className="flex items-center justify-center gap-2 "
			>
				<div
					className={`${selected && "bg-default"} size-4 border border-bgRadio rounded-full transition-all delay-150 linear`}
				/>
				<span>Feminino</span>

				<input
					type="radio"
					name="gender"
					checked={selected}
					className="hidden"
				/>
			</button>

			<button
				type="button"
				onClick={() => handleClick("male")}
				className="flex items-center justify-center gap-2 "
			>
				<div
					className={`${selected2 && "bg-default"} size-4 border border-bgRadio rounded-full transition-all delay-150 linear`}
				/>
				<span>Masculino</span>
				<input
					type="radio"
					name="gender"
					checked={selected2}
					className="hidden"
				/>
			</button>
		</div>
	);
};

export default InputRadio;
