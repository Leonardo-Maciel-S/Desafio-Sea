import { FaPaperclip } from "react-icons/fa";
import { type ChangeEvent, useState } from "react";

const InputFile = () => {
	const [inputRef, setInputRef] = useState("");

	const handleClick = (e: ChangeEvent) => {
		setInputRef(e.target?.files[0].name);
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="px-[12px] py-1 outline-none border border-defaultBlue rounded-[10px] text-base font-medium text-dark placeholder:text-dark flex justify-between items-center h-9">
				<span>{inputRef || "Selecione um arquivo"}</span>
				<FaPaperclip size={18} color="#959595" />
			</div>

			<label
				htmlFor="file"
				className="text-defaultBlue border border-defaultBlue rounded-[10px] text-center text-sm px-10 py-[10px] cursor-pointer"
			>
				<input
					id="file"
					name="file"
					onChange={(e) => handleClick(e)}
					type="file"
					className="hidden"
				/>
				<span>Selecionar arquivo</span>
			</label>
		</div>
	);
};

export default InputFile;
