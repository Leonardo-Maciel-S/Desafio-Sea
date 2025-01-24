import { useContext } from "react";

import Fieldset from "../../inputs/Fieldset";
import Label from "../../inputs/Label";
import { EditEmployeeContext } from "../../../context/EditEmployeeContext";
import InputRadio from "../../inputs/InputRadio";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";

export const PersonalDatas = () => {
	const context = useContext(EditEmployeeContext);
	if (!context) return;

	const { employeeToEdit } = useSelector((state: RootState) => state.employees);
	if (!employeeToEdit) return;

	const {
		register,
		formState: { errors },
	} = context.formMethods;

	const options = ["Frontend", "Backend", "Designer"];

	return (
		<Fieldset className="gap-[24px]">
			<Label name="Nome" minWidth>
				<input
					type="text"
					placeholder="Digite seu nome"
					className={`input ${errors.name && "error"}`}
					{...register("name", { value: employeeToEdit.name })}
				/>
			</Label>

			<div className={`flex flex-col flex-1 gap-[8px] `}>
				<span className="font-medium text-base">Sexo</span>

				<InputRadio />
			</div>

			<Label name="CPF" minWidth>
				<input
					className={`input ${errors.cpf && "error"}`}
					{...register("cpf", { value: employeeToEdit.cpf })}
					type="text"
					placeholder="CPF"
				/>
			</Label>

			<Label name="Data de Nascimento">
				<input
					type="date"
					className={`input ${errors.birth && "error"}`}
					{...register("birth", { value: employeeToEdit.birth })}
				/>
			</Label>

			<Label name="RG" className="flex-1" minWidth>
				<input
					className={`input ${errors.RG && "error"}`}
					{...register("RG", { value: employeeToEdit.RG })}
					type="text"
					placeholder="RG"
				/>
			</Label>

			<Label name="Cargo" minWidth className="xl:min-w-[250px] flex-1">
				<div
					className={`input h-9 flex justify-between items-center ${errors.job && "error"} xl:min-w-[250px]`}
				>
					<select
						{...register("job", { value: employeeToEdit.job })}
						className="bg-transparent w-full flex justify-between items-center gap-2 "
					>
						<option value={employeeToEdit.job}>{employeeToEdit.job}</option>
						{options.map((option) => {
							if (option !== employeeToEdit.job) {
								return (
									<option key={option} value={option}>
										{option}
									</option>
								);
							}
						})}
					</select>
				</div>
			</Label>
		</Fieldset>
	);
};
