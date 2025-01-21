import { useEffect, useRef, useState } from "react";

interface Select {
	defaultValue: string;
	options?: string[];
}

const Select = ({ defaultValue, options }: Select) => {
	const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);
	const defaultOption = useRef("");
	const selectRef = useRef<HTMLDivElement>(null);

	const option = defaultOption.current || defaultValue;

	const handleClick = (option: string) => {
		setIsOptionModalOpen(false);
		defaultOption.current = option;
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			selectRef.current &&
			!selectRef.current.contains(event.target as Node)
		) {
			setIsOptionModalOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={selectRef}>
			<button
				type="button"
				onClick={() => setIsOptionModalOpen(!isOptionModalOpen)}
				className="select w-full px-[12px] py-1 outline-none border border-defaultBlue rounded-[10px] text-base font-medium text-dark placeholder:text-dark flex justify-between items-center gap-2 h-8 min-w-max"
			>
				<span>{option}</span>
				<div className="w-2 h-2 border-b-2 border-s-2 border-black -rotate-[45deg] mr-1 mb-1 " />
			</button>

			{isOptionModalOpen && (
				<div className="flex flex-col w-full absolute border bg-white border-black items-start z-20 ">
					{options?.map((option) => (
						<button
							type="button"
							onClick={() => handleClick(option)}
							key={option}
							className="hover:bg-zinc-200 w-full px-[12px] py-1 flex z-30 "
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
