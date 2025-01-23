import { FaPaperclip } from "react-icons/fa";
import type { ChangeEvent } from "react";
import type { FieldError } from "react-hook-form";

interface InputFileProps {
	error?: FieldError;
	inputFileName: string;
	setInputFileName: React.Dispatch<React.SetStateAction<string>>;
}

const InputFile = ({
	error,
	inputFileName,
	setInputFileName,
}: InputFileProps) => {
	const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;

		if (files) setInputFileName(files[0].name);
	};

	return (
		<div className="flex flex-col gap-6">
			<div
				className={`flex justify-between items-center h-9 input ${error && "error"}`}
			>
				<span>{inputFileName || "Selecione um arquivo"}</span>
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
