import { FaPaperclip } from "react-icons/fa";
import { useContext, useEffect, useState, type ChangeEvent } from "react";
import type { FieldError } from "react-hook-form";
import { NewEmployeeContext } from "../../context/NewEmployeeContext";
import { EditEmployeeContext } from "../../context/EditEmployeeContext";
import type { Employee } from "../../types/employees";

interface InputFileProps {
	error?: FieldError;
	inputFileName?: string;
	setInputFileName: React.Dispatch<React.SetStateAction<string>>;
	employeeToEdit?: Employee | null;
	isNew?: boolean;
}

const InputFile = ({
	error,
	isNew,
	setInputFileName,
	inputFileName,
}: InputFileProps) => {
	const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;

		if (files) {
			const name = files[0].name;

			setValue("medicalCertificate", name);
			setInputFileName(name);
		}
	};

	const context = isNew
		? useContext(NewEmployeeContext)
		: useContext(EditEmployeeContext);

	if (!context) return;

	const { register, setValue } = context.formMethods;

	useEffect(() => {
		register("medicalCertificate");
	}, [inputFileName]);

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
					type="file"
					className="hidden"
					onChange={(e) => handleClick(e)}
				/>

				<input
					type="text"
					className="hidden"
					{...register("medicalCertificate", { value: inputFileName })}
				/>

				<span>Selecionar arquivo</span>
			</label>
		</div>
	);
};

export default InputFile;
