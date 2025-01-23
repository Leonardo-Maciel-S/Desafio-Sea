import { type HTMLAttributes, useState } from "react";

interface InputRadioProps extends HTMLAttributes<HTMLInputElement> {
	setInputGender: React.Dispatch<React.SetStateAction<string>>;
}

const InputRadio = ({ setInputGender }: InputRadioProps) => {
	const [selected, isSelected] = useState("");

	const handleClick = (gender: string): void => {
		if (gender === "female") {
			isSelected("female");
			setInputGender("feminino");
			return;
		}

		isSelected("male");
		setInputGender("masculino");
	};

	return (
		<div className="flex gap-2 items-center h-8">
			<button
				type="button"
				onClick={() => handleClick("female")}
				className="flex items-center justify-center gap-2 "
			>
				<div
					className={`${selected === "female" && "bg-default"} size-4 border border-bgRadio rounded-full transition-all delay-75 linear`}
				/>
				<span>Feminino</span>
			</button>

			<button
				type="button"
				onClick={() => handleClick("male")}
				className="flex items-center justify-center gap-2 "
			>
				<div
					className={`${selected === "male" && "bg-default"} size-4 border border-bgRadio rounded-full transition-all delay-75 linear`}
				/>
				<span>Masculino</span>
			</button>
		</div>
	);
};

export default InputRadio;
