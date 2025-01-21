import { useRef, useState } from "react";

interface Select {
	defaultValue: string;
	options?: string[];
}

const Select = ({ defaultValue, options }: Select) => {
	const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);
	const defaultOption = useRef("");

	const option = defaultOption.current || defaultValue;

	const handleClick = (option: string) => {
		console.log(option);
		setIsOptionModalOpen(false);
		defaultOption.current = option;
	};

	return (
		<div className="relative">
			<button
				type="button"
				onClick={() => setIsOptionModalOpen(!isOptionModalOpen)}
				className="w-full px-[12px] py-1 outline-none border border-defaultBlue rounded-[10px] text-base font-medium text-dark placeholder:text-dark flex justify-between items-center h-8"
			>
				<span>{option}</span>
				<div className="w-2 h-2 border-b-2 border-s-2 border-black -rotate-[45deg] mr-1 mb-1 " />
			</button>

			{isOptionModalOpen && (
				<div className="flex flex-col w-full absolute border border-black items-start bg-white">
					{options?.map((option) => (
						<button
							type="button"
							onClick={() => handleClick(option)}
							key={option}
							className="hover:bg-zinc-200 w-full px-[12px] py-1 flex "
						>
							{option}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;
